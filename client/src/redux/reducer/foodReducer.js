
//Importamos Nuestros Tipos De Acciones
import { 
  GET_ALL_FOOD, 
  GET_ALL_FOOD_BY_NAME,
  GET_FOOD_BY_ID,
  GET_ALL_DIETS,
  CREATE_RECIPES } from "../actions/types";

  const initialState = {
    foods: [],
    allFoods: [],
    detailFood: {},
    diets: [],
  };


  const foodReducer = (state=initialState, action) => {
    switch(action.type){

      case GET_ALL_FOOD:
        return {
          ...state,
          foods: action.payload,
          allFoods: action.payload,
        }

      case GET_ALL_FOOD_BY_NAME: 
        return {
          ...state,
          foods: action.payload, 
        }

      case GET_FOOD_BY_ID:
        return {
          ...state,
          detailFood: action.payload,
        }  
        
      case GET_ALL_DIETS:
        return {
          ...state,
          diets: action.payload,
        }
        
      case CREATE_RECIPES:
        return {
          ...state,
        }

      default:
        return state;
    };
  };


  export default foodReducer;