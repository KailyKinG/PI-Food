
const { Router } = require('express');
const dietsRouter = Router();
const { getAllDietsApi } = require('../controllers/dietsControllers');

//Debemos De Suponer Que Antes Esta La Ruta /api
dietsRouter.get('/diets', async (req, res) => {
  try {
    const result = await getAllDietsApi();
    return res.status(200).json(result);
  } catch (error) {
     return res.status(404).json({"Error": error.message});
  }
});


module.exports = dietsRouter;