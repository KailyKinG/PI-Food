import React, {useState} from "react";
import Recipe from "../components/Recipe";
import Paginado from "../components/Paginado";
import Filter from "../components/Filter";
import Error from "../page/Error";
import { useSelector } from "react-redux";

import h from "./Home.module.css";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #000000d9;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  /* border: solid 1px transparent; */
  border: solid 1px transparent;
`;

const Home = (props) => {
  //Pedimos Todas Las Recetas De Nuestro 'store'
  const recipes = useSelector((state) => state.foods);
  console.log(recipes);
  const errorByName = useSelector((state) => state.errorByName);
  const [currentPage, setCurrentPage] = useState(1);
  
  const recipesPorPage = 9;
  const indexOfLastPage = currentPage * recipesPorPage;      // 9
  const indexOfFirstPage = indexOfLastPage - recipesPorPage; // 0
  const currentRecipes = [...recipes].slice(indexOfFirstPage, indexOfLastPage);

  const paginado = (number) => {
    setCurrentPage(number);
  };

  if(Object.keys(errorByName).length === 0){
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
        <div className={h.containerRecetasErrorByName}>
          <Error
            errorByName={errorByName}
          />
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

