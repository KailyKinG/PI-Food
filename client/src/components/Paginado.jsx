import React from "react";
// import { NavLink } from "react-router-dom";

import p from "./Paginado.module.css";
import styled from "styled-components";

const ContainerUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 20px 0 20px;
`;

const Paginado = (props) => {
  const {DB, recipesPorPage, paginado, currentPage} = props;

  const pagesNumber = [];
  for(let i = 1; i <= Math.ceil(DB/recipesPorPage); i++){
    pagesNumber.push(i);
  }

  return(
    <nav className={p.componentPaginado}>
      <ContainerUL>
        {
          pagesNumber.length && pagesNumber.map((number) => (
              <li className={number === currentPage ? p.stylesLiactive : p.stylesLi } key={number} onClick={() => paginado(number)}>{number}</li>
          ))
        }
      </ContainerUL>
    </nav>
  );
};

export default Paginado;