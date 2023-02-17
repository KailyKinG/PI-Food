const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('../routes/recipeRouter');
const dietsRouter = require('../routes/dietsRouter');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api', recipeRouter);
router.use('/api', dietsRouter);


module.exports = router;
