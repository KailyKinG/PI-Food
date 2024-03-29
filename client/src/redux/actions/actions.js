import Swal from "sweetalert2";

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
	ORDER_HEALTH_SCORE,
	ERROR_BY_NAME,
	ERROR_ALL_FOODS,
	ERROR_GET_DETAIL,
} from "./types";

/**
 * http://localhost:3001/api/recipes
 * http://localhost:3001/api/diets
 */

///////////////////////////////////////////
// BASE DE LA URL QUE VIENE DESDE BACKEND
// ---------------------------------------
// const baseURL = "http://localhost:3001";
const baseURL = "https://pi-food-production-5535.up.railway.app";
// const baseURL = "https://pi-food-server.onrender.com";
// ------------------------------------------------------------------

//CREAMOS NUESTRAS ACTIONS

//Action Para Pedir Todas Las Recetas
//------------------------------------
export const getAllFood = () => async (dispatch) => {
	try {
		const response = await fetch(`${baseURL}/api/recipes`);
		// console.log("response Es: ", response);
		const data = await response.json();
		// console.log("data Es: ", data);
		if (data.Error) {
			dispatch({
				type: ERROR_ALL_FOODS,
				payload: data,
			});
		} else {
			const clearError = {};
			dispatch({
				type: GET_ALL_FOOD,
				payload: data,
			});
			dispatch({
				type: ERROR_ALL_FOODS,
				payload: clearError,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

//Action Para Pedir Las Recetas Por Nombre
//----------------------------------------
export const getAllFoodByName = (name) => async (dispatch) => {
	let data;
	try {
		const response = await fetch(`${baseURL}/api/recipes?name=${name}`);
		data = await response.json();
		if (data.Error) {
			dispatch({
				type: ERROR_BY_NAME,
				payload: data, //data Es Un Objeto Con La Propiedad Error
			});
		} else {
			const clearError = {};
			dispatch({
				type: GET_ALL_FOOD_BY_NAME,
				payload: data,
			});
			dispatch({
				type: ERROR_BY_NAME,
				payload: clearError,
			});
		}
	} catch (error) {
		console.log(error.message);
	}
};

//Action Para Pedir Una Receta Por Id
//-----------------------------------
export const getFoodById = (id) => (dispatch) => {
	return fetch(`${baseURL}/api/recipes/${id}`)
		.then((res) => res.json())
		.then((data) => {
			if (data.Error) {
				dispatch({
					type: ERROR_GET_DETAIL,
					payload: data,
				});
			} else {
				const clearError = {};
				dispatch({
					type: GET_FOOD_BY_ID,
					payload: data,
				});
				dispatch({
					type: ERROR_GET_DETAIL,
					payload: clearError,
				});
			}

			//Seccion Solo Para Pruebas
			///////////////////////////
			// dispatch({
			//   type: ERROR_GET_DETAIL,
			//   payload: {Error: "Algo Salio Mal"}
			// });
		})
		.catch((error) => console.log(error));
};

export const getAllDiets = () => (dispatch) => {
	return fetch(`${baseURL}/api/diets`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({
				type: GET_ALL_DIETS,
				payload: data,
			});
		});
};

export const createRecipes = (recipe) => async (dispatch) => {
	try {
		const newRecipe = await fetch(`${baseURL}/api/recipes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recipe),
		});
		const data = await newRecipe.json();
		console.log(data);
		if (data.Error) {
			Swal.fire({
				title: "Que Paso...?",
				text: data.Error,
				icon: "error",
				confirmButtonText: "Ok",
			});
		} else {
			Swal.fire({
				title: "Perfecto",
				text: data.msg,
				icon: "success",
				confirmButtonText: "Ok",
			});
			dispatch({
				type: CREATE_RECIPES,
				payload: data,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const filterByDiets = (dieta) => {
	return {
		type: FILTER_BY_DIETS,
		payload: dieta,
	};
};

export const filterByOrigin = (origin) => {
	return {
		type: FILTER_BY_ORIGIN,
		payload: origin,
	};
};

export const orderByABC = (orden) => {
	return {
		type: ORDER_ASC_DESC,
		payload: orden,
	};
};

export const orderByHealthScore = (healthScore) => {
	return {
		type: ORDER_HEALTH_SCORE,
		payload: healthScore,
	};
};
