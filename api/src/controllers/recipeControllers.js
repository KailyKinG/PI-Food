const { Recipe, Diets } = require('../db');
const axios = require('axios');
const { getRecipesDetails, validateString, arrojarError } = require('../utils/utils');
const { Op } = require('sequelize');
const clave = require('../../apiKeyActual');

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

  if(!encontrados.length) arrojarError('Not Found: '+'No Se Encontraron Resultados');
  return encontrados;
};


//PEDIR TODAS LAS RECETAS
const getAllFood = async  (name) => {

  //Pedimos Las Recetas En Api
  const recetasApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}&addRecipeInformation=true&number=100`);
  const data = await recetasApi.data.results;

  //Pedimos Las Recetas En DataBase
  const recetasBD = await Recipe.findAll({
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

  if(!name){// Si No Recibimos Un 'name'; Enviamos Todas Las Recetas (API y DB)
    const recetas = getRecipesDetails(data);
    return [...recetas, ...recetasBD];
  }else{ // Si Recibimos un 'name', Primero Validamos
    const isValid = validateString(name);
    if(!isValid) arrojarError('Debe De Ser Solo Letras Del Abecedario');
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
      Diets: data.diets?.map(elem => {return {"name": elem}}),
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
  
  if(Object.keys(resultados).length === 0) arrojarError('Not Found: '+'No Se Encontraron Resultados');
  return resultados;
};



const createRecipe = async (name, image, summary, level, stepbystep, dietas) => {
  if(!name || !summary || !level || !stepbystep || !dietas.length){
    arrojarError('Parametros Necesarios Incompletos');
  }

  if(!image){ image = "https://cdn.pixabay.com/photo/2016/10/12/10/18/gear-1734005_1280.png"}
  const isExists = await Diets.findAll({
    where: {name: dietas}
  });
  (isExists.length !== dietas.length) && arrojarError('Dietas Ingresadas No Son Validas');

  //Consultar Si Ya Tenemos La Receta; 
  const busqueda = await Recipe.findOne({
    where:{
      [Op.and]:[
        {name: name},
        {level: level},
        {summary: summary},
      ]
    }
  }); 

  if(busqueda !== null){ // Si Ya La Tenemos, Arrojamos Un Error
    arrojarError('La Receta Ya Existe');
  }else{ // Caso Contrario, La Creamos
    const newRecipes = await Recipe.create({name, image, summary, level, stepbystep});
    newRecipes.addDiets(isExists);
    return 'Diet Created Successfully';
  }
};

module.exports = {
  getAllFood,
  getFoodById,
  createRecipe,
};