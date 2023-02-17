const axios = require('axios');
const {Diets} = require('../db');
const { API_KEY, API_KEY2, API_KEY3, API_KEY4, API_KEY5 } = process.env;
const clave = API_KEY;


let ruta = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}&addRecipeInformation=true&number=100`;

const getAllDietsApi = async () => {
    const isEmpty = await Diets.findAll();
    if(!isEmpty.length){
      let recetas = [];
      const peticion = await axios.get(ruta);
      let data = await peticion.data.results; //data Es Un Array De Objetos De Recetas

      data.forEach((elem) => {
        recetas = [...recetas, ...elem.diets];
      });
      recetas = [...new Set(recetas)];
      for(let name of recetas){
        await Diets.create({name: name});
      }
      // return recetas;
      const dietas = await Diets.findAll();
      return dietas;
    }else{
      return isEmpty;
    }
};

module.exports = {
  getAllDietsApi,
};