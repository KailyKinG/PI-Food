import React, {useState} from "react";
import Recipe from "../components/Recipe";
import Paginado from "../components/Paginado";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";

import h from "./Home.module.css";
import styled from "styled-components";
import SubmarinoMalo from "../assets/Imagenes/Submarino-malo.png";

const HomeContainer = styled.div`
  background-color: #000000d9;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  /* border: solid 1px transparent; */
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
  //Pedimos Todas Las Recetas De Nuestro 'store'
  const recipes = useSelector((state) => state.foods);
  const errorByName = useSelector((state) => state.errorByName);
  const errorAllFoods = useSelector((state) => state.errorAllFoods);
  const [currentPage, setCurrentPage] = useState(1);
  
  const recipesPorPage = 9;
  const indexOfLastPage = currentPage * recipesPorPage;      // 9
  const indexOfFirstPage = indexOfLastPage - recipesPorPage; // 0
  const currentRecipes = [...recipes].slice(indexOfFirstPage, indexOfLastPage);

  const paginado = (number) => {
    setCurrentPage(number);
  };

  if(Object.keys(errorByName).length === 0 && Object.keys(errorAllFoods).length === 0){
    return (
      <HomeContainer>
        <Filter />
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
          paginado={paginado}
          currentPage={currentPage}
        />
      </HomeContainer>
    );
  }else{
    return (
      <HomeContainer>
        <Filter />
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
          paginado={paginado}
          currentPage={currentPage}
        />
      </HomeContainer>
    );
  }
  
};

export default Home;

