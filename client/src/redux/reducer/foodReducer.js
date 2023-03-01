
//Importamos Nuestros Tipos De Acciones
import { 
  GET_ALL_FOOD, 
  GET_ALL_FOOD_BY_NAME,
  GET_FOOD_BY_ID,
  GET_ALL_DIETS,
  CREATE_RECIPES,
  FILTER_BY_DIETS,
  FILTER_BY_ORIGIN,
  ORDER_ASC_DESC,
  ORDER_HEALTH_SCORE,
  ERROR_BY_NAME,
  ERROR_ALL_FOODS,
  ERROR_GET_DETAIL } from "../actions/types";

  const initialState = {
    foods: [],
    allFoods: [],
    detailFood: {},
    diets: [],
    creadas: [],
    errorByName: {},
    errorAllFoods: {},
    errorGetDetail: {},
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
          creadas: [...state.creadas, action.payload],
        }

      case FILTER_BY_DIETS:
        const todos = [...state.allFoods];
        let dietas;
        if(action.payload === "all"){
          dietas = [...todos];
        }else{
          dietas = [...todos].filter((recipe) => {
            return recipe.Diets.some((dieta) => dieta.name.includes(action.payload));
          });
        }
        return {
          ...state,
          foods: dietas,
        }

      case FILTER_BY_ORIGIN:
        let origin;
        const todos2 = [...state.allFoods];
        if(action.payload === "db"){
          origin = [...todos2].filter((recipe) => recipe.createInDB === true);
          console.log(origin);
        }else{
          origin = [...todos2].filter((recipe) => !recipe.createInDB === true);
        }
        return {
          ...state,
          foods: origin,
        }

      case ORDER_ASC_DESC:
        let listaABC;
        const todos3 = [...state.allFoods];
        if(action.payload === "asc"){
          listaABC = [...todos3].sort((a, b) => {
            if(a.name > b.name){
                return 1;
            }else if(b.name > a.name){
                return - 1;
            }else{
                return 0;
            }
        });
        }else if(action.payload === "desc"){
          listaABC = [...todos3].sort((a, b) => {
            if(a.name > b.name){
                return - 1;
            }else if(b.name > a.name){
                return 1;
            }else{
                return 0;
            }
        });
        }else{
          listaABC = [...todos3];
        }
        return {
          ...state,
          foods: listaABC,
        }

      case ORDER_HEALTH_SCORE:
        let healthScore;
        const todos4 = [...state.allFoods];
        if(action.payload === "mas"){
          healthScore = [...todos4].sort((a, b) => {
            if(a.level > b.level){
                return - 1;
            }else if(b.level > a.level){
                return 1;
            }else{
                return 0;
            }
        });
        }else if(action.payload === "menos"){
          healthScore = [...todos4].sort((a, b) => {
            if(a.level > b.level){
                return 1;
            }else if(b.level > a.level){
                return - 1;
            }else{
                return 0;
            }
        });
        }else{
          healthScore = [...todos4];
        }
        return {
          ...state,
          foods: healthScore,
        }

      case ERROR_BY_NAME:
        return {
          ...state,
          errorByName: action.payload,
        }

      case ERROR_ALL_FOODS:
        return {
          ...state,
          errorAllFoods: action.payload,
        }

      case ERROR_GET_DETAIL:
        return {
          ...state,
          errorGetDetail: action.payload,
        } 

      default:
        return state;
      };
  };


  export default foodReducer;
