
const { Router } = require('express');
const recipeRouter = Router();
const { getAllFood, getFoodById } = require('../controllers/recipeControllers');

//Debemos De Suponer Que Antes Esta La Ruta /api
recipeRouter.get('/', (req, res) => {
  res.status(200).json({"Msg": "Se Supone Que Aqui Estara El Landing Page"});
});



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


recipeRouter.get('/recipes/:idRecipe', async (req, res) => {
  let { idRecipe } = req.params;
  try {
    const result = await getFoodById(idRecipe);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({'Error': error.message});
  }
});


module.exports = recipeRouter;