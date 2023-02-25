import React from "react";
import SubmarinoMalo from "../assets/Imagenes/Submarino-malo.png";

import e from "./Error.module.css";
// import styled from "styled-components";

const Error = (props) => {
  const {location} = props;
  return(
    <>
      <h1>Error 404; Not Found</h1>
      <h2 className={e.title}>Ruta: {location}<br/> No Existe</h2>
      <div className={e.containerImagen}>
        <img className={e.imagen} src={SubmarinoMalo} alt="Imagen Not Found" />
      </div>
      <div className={e.relleno}></div>
    </>
  );
};


export default Error;