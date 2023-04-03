import React from "react";
import arriba from "../assets/Imagenes/flecha-arriba.png";
import abajo from "../assets/Imagenes/flecha-hacia-abajo.png";

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
  const {DB, recipesPorPage, setCurrentPage, currentPage} = props;

  const pagesNumber = [];
  for(let i = 1; i <= Math.ceil(DB/recipesPorPage); i++){
    pagesNumber.push(i);
  }
  
  const botonPrevious = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const botoNext = () =>{
    if(currentPage < pagesNumber.length){
      setCurrentPage(currentPage + 1);
    }
  }

  return(
    <nav className={p.componentPaginado}>
      <ContainerUL>
        <li className={p.stylesLiPrevNext} onClick={botonPrevious}>{(currentPage !== 1) && <img src={arriba} alt="Icono Fecha Arriba" />}</li>
        {
          pagesNumber?.map((number) => (
              <li className={number === currentPage ? p.stylesLiactive : p.stylesLi } key={number} onClick={() => setCurrentPage(number)}>{number}</li>
          ))
        }
        <li className={p.stylesLiPrevNext} onClick={botoNext}>{(currentPage !== pagesNumber.length) && <img src={abajo} alt="Icono Fecha Abajo" />}</li>
      </ContainerUL>
      
    </nav>
  );
};

export default Paginado;