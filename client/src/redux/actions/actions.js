
import axios from 'axios';
import Swal from 'sweetalert2';

//Traemos Los Tipos De Acciones
import { 
  GET_ALL_FOOD,
  GET_ALL_FOOD_BY_NAME,
  GET_FOOD_BY_ID,
  GET_ALL_DIETS,
  CREATE_RECIPES,
  FILTER_BY_DIETS,
  FILTER_BY_ORIGIN,
  ORDER_ASC_DESC,
  ORDER_HEALTH_SCORE } from "./types";

  /**
   * http://localhost:3001/api/recipes
   * http://localhost:3001/api/diets
   */


//CREAMOS NUESTRAS ACTIONS

//Action Para Pedir Todas Las Recetas
//------------------------------------
export const getAllFood = () => (dispatch) =>{
  return fetch(`http://localhost:3001/api/recipes`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_ALL_FOOD,
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};


//Action Para Pedir Las Recetas Por Nombre
//----------------------------------------
export const getAllFoodByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/api/recipes?name=${name}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_ALL_FOOD_BY_NAME,
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};


//Action Para Pedir Una Receta Por Id
//-----------------------------------
export const getFoodById = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/api/recipes/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_FOOD_BY_ID,
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};

export const getAllDiets = () => (dispatch) => {
  return fetch(`http://localhost:3001/api/diets`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_ALL_DIETS,
        payload: data,
      });
    })
};

export const createRecipes = (recipe) => async (dispatch) => {
  try {
    const newRecipe = await axios.get({
      method: 'post',
      url: 'http://localhost:3001/api/recipes',
      data: recipe,
    });
    Swal.fire({
      title: 'Perfecto',
      text: newRecipe.data.msg,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    dispatch({
      type: CREATE_RECIPES,
      payload: newRecipe
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterByDiets = (dieta) => {
  return {
    type: FILTER_BY_DIETS,
    payload: dieta,
  }
};

export const filterByOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  }
};

export const orderByABC = (orden) => {
  return {
    type: ORDER_ASC_DESC,
    payload: orden,
  }
};

export const orderByHealthScore = (healthScore) => {
  return {
    type: ORDER_HEALTH_SCORE,
    payload: healthScore,
  }
};


