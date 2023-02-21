import React from "react";
import { NavLink } from "react-router-dom";

import p from "./Paginado.module.css";
import styled from "styled-components";

const ContainerUL = styled.ul`

`;

const Paginado = (props) => {
  const {DB, recipesPorPage, paginado} = props;

  const pagesNumber = [];
  for(let i = 1; i <= Math.ceil(DB/recipesPorPage); i++){
    pagesNumber.push(i);
  }

  return(
    <nav className={p.componentPaginado}>
      <ContainerUL>
        
      </ContainerUL>
    </nav>
  );
};

export default Paginado;