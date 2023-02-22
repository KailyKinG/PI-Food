import React from "react";
import { Link } from "react-router-dom";

//data Es Un Archivo De Prueba Con Datos De Una Receta. Usada
//Para Crear Este Componente
//import data from "../dataExample";

import r from "./Recipe.module.css";
import styled from "styled-components";

const ContainerUl = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 0.8rem;
  border: solid 1px transparent;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
`;

const Recipe = (props) => {
  const {id, image, name, Diets} = props;
  return(
    <div className={r.containerRecipe}>
      <div className={r.containerImage}>
        <img className={r.imagen} src={image} alt={name} />
      </div>
      <Link className={r.titleStilos} to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <div>
        <ContainerUl>
          {
            Diets.length && Diets.map((elem) => (
              <li key={elem.name}>{elem.name}</li>
            ))
          }
        </ContainerUl>
      </div>
    </div>
  );
};

export default Recipe;