const { Recipe, Diets } = require('../db');
const axios = require('axios');
const { getRecipesDetails, validateString, validateNumber } = require('../utils/utils');
const { Op } = require('sequelize');
const { API_KEY, API_KEY2, API_KEY3, API_KEY4, API_KEY5 } = process.env;
const clave = API_KEY;

// https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}
// https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}&addRecipeInformation=true&number=100
// https://api.spoonacular.com/recipes/{id}/information?apiKey=${clave}


//PEDIR TODAS LAS RECETAS EN LA 'API' POR NOMBRE
const getAllFoodApiByName = (name, data) => {
  let recetas = getRecipesDetails(data);
  recetas = recetas.filter((food) => {
   return food.name?.toLowerCase().includes(name);
  });
  return recetas;
};


//PEDIR TODAS LAS RECETAS EN 'DATA BASE' POR NOMBRE
const getAllFoodDbByName = async (name) => {
  const busqueda = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      }
    },
    include: [
      {
        model: Diets,
        attributes: ['name'],
        through: {
          attributes:[],
        }
      }
    ]
  });
  return busqueda;
};


//PEDIR TODAS LAS RECETAS POR NOMBRE
const getAllFoodByName = async (name, data) => {
  name = name.toLowerCase();
  let encontrados = [];
  //Busqueda Por Nombre En Api
  //---------------------------
  const searchApi = getAllFoodApiByName(name, data);
  encontrados = [...encontrados, ...searchApi];

  //Busqueda Por Nombre En DataBase
  //-------------------------------
  const searchDb = await getAllFoodDbByName(name);
  encontrados = [...encontrados, ...searchDb];

  if(!encontrados.length) throw new Error('Not Found: '+'No Se Encontraron Resultados');
  return encontrados;
};


//PEDIR TODAS LAS RECETAS
const getAllFood = async  (name) => {
  const peticion = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}&addRecipeInformation=true&number=100`);
  const data = await peticion.data.results;
  if(!name){
    const recetas = getRecipesDetails(data);
    return recetas;
  }else{
    const isValid = validateString(name);
    if(!isValid) throw new Error('Debe De Ser Solo Letras Del Abecedario');
    const result = await getAllFoodByName(name, data);
    return result;
  }
};


//PEDIR UNA RECETA POR ID EN API
const getFoodApiById = async (id) => {
  const peticion = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${clave}`);
  let data = await peticion.data;
  data = {
      id: data.id,
      name: data.title,
      image: data.image,
      summary: data.summary,
      level: data.healthScore,
      stepbystep: data.analyzedInstructions[0]?.steps.map((elem) => {
        return {
          number: elem.number,
          step: elem.step,
        }
      }),
      diets: data.diets?.map(elem => elem),
    }
  return data;
};


const getFoodDbById = async (id) => {
  let receta = await Recipe.findOne({
    where: {id: id},
    include: [
      {
        model:Diets,
        attributes: ['name'],
        through: {
          attributes:[],
        }
      }
    ]
  });
  if(receta === null) receta = {};
  return receta;
}; 


//PEDIR RECETAS POR ID
const getFoodById = async (id) => {
  let resultados = {};
  // const isValid = validateNumber(id);
  // if(!isValid) throw new Error('Solo Deben Ser Caracteres De Tipo Numero');
  
  const identificador = parseInt(id);
  //Primero Buscamos En Api
  if(id.length === 6){
    const result = await getFoodApiById(identificador);
    resultados = result;
  }

  //Si No Encontramos... Buscamos En DB
  if(id.length > 30){
    const result = await getFoodDbById(id);
    resultados = result;
  }
  
  if(Object.keys(resultados).length === 0) throw new Error('Not Found: '+'No Se Encontraron Resultados');
  return resultados;
};


module.exports = {
  getAllFood,
  getFoodById,
};