import React from "react";
import Recipe from "../components/Recipe";
import Paginado from "../components/Paginado";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import Loading from "../assets/Imagenes/Loading.png";

import h from "./Home.module.css";
import styled from "styled-components";
import SubmarinoMalo from "../assets/Imagenes/Submarino-malo.png";

const HomeContainer = styled.div`
  background-color: #000000d9;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border: solid 1px transparent;
`;

const ErrorContainer = styled.div`
  width: 37.5rem;
  min-height: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px transparent;
`;

const Home = (props) => {
  const {currentPage, setCurrentPage } = props;

 
  const errorByName = useSelector((state) => state.errorByName);
  const errorAllFoods = useSelector((state) => state.errorAllFoods);

  const recipes = useSelector((state) => state.foods);

  const recipesPorPage = 9;
  const indexOfLastPage = currentPage * recipesPorPage;      // 9
  const indexOfFirstPage = indexOfLastPage - recipesPorPage; // 0
  const currentRecipes = [...recipes].slice(indexOfFirstPage, indexOfLastPage);  


  if(Object.keys(errorByName).length === 0 && Object.keys(errorAllFoods).length === 0){
    if(recipes.length !== 0){
      return (
        <HomeContainer>
          <Filter setCurrentPage={setCurrentPage} />
          <div className={h.containerRecetas}>
            {
              currentRecipes?.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  id={recipe.id}
                  image={recipe.image}
                  name={recipe.name}
                  Diets={recipe.Diets}
                />
              ))
            }
          </div>
          <Paginado
            DB={recipes.length}
            recipesPorPage={recipesPorPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </HomeContainer>
      );
    }else{
      return (
        <HomeContainer>
          <Filter setCurrentPage={setCurrentPage} />
          <div className={h.containerRecetasError}>
            <div className={h.containerLoading}>
              <div>
                <img className={h.imagenLoading} src={Loading} alt="Imagen De Un Plato De Ensaladas; Loading..." />
              </div>
              <div>
                <h2 className={h.titleLoading}>Loading......</h2>
              </div>
            </div>
          </div>
          <Paginado
            DB={recipes.length}
            recipesPorPage={recipesPorPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </HomeContainer>
      );
    }
  }else{
    return (
      <HomeContainer>
        <Filter setCurrentPage={setCurrentPage} />
        <div className={h.containerRecetasError}>
          <ErrorContainer>
            <h1 className={h.errorTitle}>{(errorByName.Error || errorAllFoods.Error)}</h1>
            <div className={h.errorContainerImagen}>
              <img className={h.errorImagen} src={SubmarinoMalo} alt="Imagen Not Found" />
            </div>
            <div className={h.errorRelleno}></div>
          </ErrorContainer>
        </div>
        <Paginado
          DB={recipes.length}
          recipesPorPage={recipesPorPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </HomeContainer>
    );
  }
  
};

export default Home;

