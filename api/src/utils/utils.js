//Funcion Validadora De Cadenas/Strings (Solo Letras)
const validateString = (cadena) => {
  const abc = [
    "a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z"," "
  ];
  if(!cadena) throw new Error('Parametro Necesario Incompleto'); // Si No Me Pasan Argumnetos
  //if(typeof cadena !== "string") throw ('El Argumento Debe Ser Un String');
  cadena = cadena.toLowerCase();
  cadena = cadena.split("");
  let count = 0;
  cadena.forEach((elem) => {
    if(abc.includes(elem)) count++;     // p, i, k, a, c, h, u, 8, ()
    //Revisamos Si Cada 'elem' Se Encuentra En El Array De 'abc'
  })
  if(count === cadena.length) return true; //Si count tiene El Mismo Largo Que Cadena; Entonces Es Un String De Solo Letras
  return false;
};


// const validateNumber = (dato) => {
//   const numeros = ["0", "1", "2", "3", "4", "5", "6",
//                     "7", "8", "9"];
//   if(!dato) throw new Error('Parametro Necesario Incompleto');
//   dato = dato.split("");
//   let count = 0;
//   dato.forEach((elem) => {
//     if(numeros.includes(elem)) count++;
//   });
//   if(count === dato.length) return true;
//   return false;
// }; 


const getRecipesDetails = (data) => {
  data = data.map((recipes) => {
  return {
      id: recipes.id,
      name: recipes.title,
      image: recipes.image,
      summary: recipes.summary,
      level: recipes.healthScore,
      stepbystep: recipes.analyzedInstructions[0]?.steps.map((elem) => {
        return {
          number: elem.number,
          step: elem.step,
        }
      }),
      Diets: recipes.diets?.map(elem => {return {"name": elem}}),
    }
  });
  return data;
};


const arrojarError = (data) => {
  throw new Error(data);
};



module.exports = {
  validateString,
  getRecipesDetails,
  arrojarError,
};