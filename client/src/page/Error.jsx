import React from "react";
import SubmarinoMalo from "../assets/Imagenes/Submarino-malo.png";

import e from "./Error.module.css";
// import styled from "styled-components";

const Error = (props) => {
  const {errorByName} = props;
  return(
    <>
      <h1 className={e.title}>{errorByName.Error}</h1>
      <div className={e.containerImagen}>
        <img className={e.imagen} src={SubmarinoMalo} alt="Imagen Not Found" />
      </div>
      <div className={e.relleno}></div>
    </>
  );
};


export default Error;