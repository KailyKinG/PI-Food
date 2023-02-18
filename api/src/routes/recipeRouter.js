
const { Router } = require('express');
const recipeRouter = Router();
const { getAllFood, getFoodById, createRecipe } = require('../controllers/recipeControllers');

//Debemos De Suponer Que Antes Esta La Ruta /api

//Ruta Para Devolver Todas Las Recipes o Devolver Por El Query 'name'
//-------------------------------------------------------------------
recipeRouter.get('/recipes', async (req, res) => {
  let { name } = req.query;
  try {
    const result = await getAllFood(name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      "Error": error.message,
    });
  }
});


//Ruta Para Devolver Una Recipe Por Id
//------------------------------------
recipeRouter.get('/recipes/:idRecipe', async (req, res) => {
  let { idRecipe } = req.params;
  try {
    const result = await getFoodById(idRecipe);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({'Error': error.message});
  }
});


//Ruta Para Crear Una Nueva Receta
//--------------------------------
recipeRouter.post('/recipes', async (req, res) => {
  const { name, image, summary, level, stepbystep, dietas,  } = req.body;
  try {
    const result = await createRecipe(name, image, summary, level, stepbystep, dietas);
    return res.status(201).json({'Msg': result});
  } catch (error) {
    return res.status(404).json({'Error': error.message});
  }
});


module.exports = recipeRouter;