
/**
 * Creamos Un Solo Archivo En Donde Importaremos Nuestras API_KEYS Desde
   process.env, Declaramos Una Variable Constante, Llamada 'clave', Esta 
   La Dejaremos A Dispocision De Quien la Necesite Exportandola
 */
const { 
  API_KEY,
  API_KEY2, 
  API_KEY3,
  API_KEY4,
  API_KEY5,//* no funciona 401
  API_KEY6, //* no funciona 401
  API_KEY7, 
  API_KEY8, 
  API_KEY9,
  API_KEY10,
  API_KEY11,
  API_KEY12,
  API_KEY13,
  API_KEY14,
  API_KEY15,
  API_KEY_F,
  API_KEY16,
  API_KEY17,
  API_KEY18,
  API_KEY19,
  API_KEY20 } = process.env;

//Si Nos Quedamos Sin Request, Le Damos Otra API_KEY A Nuestra Variable 'clave'
const clave = API_KEY17;

// El Cambio Se Realiza En Un Solo Lugar
// Quedando Mas Limpio Nuestro Codigo.

module.exports = clave;