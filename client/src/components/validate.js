import { validateRange, validateUrlImageOnline, validateS } from "./validate-utils";

const validate = (estado) => {
  const error = {};
  //Name
  if(!estado.name){
    error.name = '"name" No debe estar vacio';
   }else{
    if(!validateS("estado.name", estado.name)){
      error.name = '"name" Debe Tener Por Los Menos 5 Letras';
    }
  }

  //Image
  if(estado.image){
    //valide
    if(!validateUrlImageOnline(estado.image)){
      error.image = '"image" Debe ser una url online';
    }
  }

  // Level
  if(!estado.level){
    error.level = '"level" No debe estar vacio';
  }else{
    if(!validateRange(estado.level)){
      error.level = '"level" Debe ser un numero; Entre 1 y 100';
    }
  }
  

  //Summary
  if(!estado.summary){
    error.summary = '"summary" No debe estar vacio';
  }else{
    if(!validateS("estado.summary", estado.summary)){
      error.summary = '"summary" Debe Tener Por Los Menos 20 Letras';
    }
  }

  //Step
  if(!estado.step){
    error.step = '"stepbystep" No debe estar vacio';
  }else{
    if(!validateS("estado.step", estado.step)){
      error.step = '"step" Debe Tener Por Los Menos 20 Letras';
    }
  }

  //Dietas
  if(estado.dietas?.length === 0){
    error.dietas = 'Debes Agregar Por Lo Meno Una Dieta';
  }

  return error;
};

export default validate;