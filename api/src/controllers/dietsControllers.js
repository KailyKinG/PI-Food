const axios = require('axios');
const {Diets} = require('../db');
const clave = require('../../apiKeyActual');


let ruta = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${clave}&addRecipeInformation=true&number=100`;

const getAllDietsApi = async () => {
    const isEmpty = await Diets.findAll();
    if(!isEmpty.length){
      let recetas = ["vegetarian"];
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