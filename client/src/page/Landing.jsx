import React from "react";
import { Link } from "react-router-dom";

// import l from "./Landing.module.css";
import styled from "styled-components";

const BotonIngresar = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: black;
  color: white;
  box-shadow: 0 0 10px 3px red;
  border: none;
  &:hover{
    background-color: white;
    color:black;
    box-shadow: 0 0 10px 0px black;
  }
`;

const Landing = (props) => {

  return(
    <>
      <h1>Este Es La Page 'Landing'</h1>
      <Link to='/home'>
        <BotonIngresar>Ingresar</BotonIngresar>
      </Link>
    </>
  );
};

export default Landing;