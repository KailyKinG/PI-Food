import React from "react";
import { useDispatch } from "react-redux";
import { 
  filterByDiets, 
  filterByOrigin,
  orderByABC,
  orderByHealthScore } from "../redux/actions/actions";

import f from "./Filter.module.css";
import styled from "styled-components";

const BotonOrigen = styled.button`
  width: 8rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius:5px;
  border: solid 1px black;
  color: #f5ededad;
  background-color: #00000073;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`;

const Filter = (props) => {
  const dispatch = useDispatch();


  const handlerDietsChange = (e) => {
    // e.preventDefault();
    const valor = e.target.value;
    console.log(valor);
    dispatch(filterByDiets(valor));
  };


  const handlerOriginChange = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(valor);
    dispatch(filterByOrigin(valor));
  };


  const handlerAbcChange = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(valor);
    dispatch(orderByABC(valor));
  };


  const handlerHealthScoreChange = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(valor);
    dispatch(orderByHealthScore(valor));
  };

  return(
    <div className={f.componentFilter}>

      <div className={f.containerDietas}>
        <h3>Filtrar Dietas</h3>
        <div className={f.botonera}>
          <div className={f.grupo1}>
            <label htmlFor="">
              <input type="radio" name="diets" value="all" onChange={(e) => handlerDietsChange(e)} />
              <p>All</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="vegetarian" onChange={(e) => handlerDietsChange(e)} />
              <p>Vegetarian</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="gluten free" onChange={(e) => handlerDietsChange(e)} />
              <p>Gluten free</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="dairy free" onChange={(e) => handlerDietsChange(e)} />
              <p>Dairy free</p>
            </label>
            <label className={f.Spetial} htmlFor="">
              <input type="radio" name="diets" value="lacto ovo vegetarian" onChange={(e) => handlerDietsChange(e)} />
              <p>lacto ovo vegetarian</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="vegan" onChange={(e) => handlerDietsChange(e)} />
              <p>Vegan</p>
            </label>
          </div>
          <div className={f.grupo2}>
            <label htmlFor="">
              <input type="radio" name="diets" value="primal" onChange={(e) => handlerDietsChange(e)} />
              <p>Primal</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="whole 30" onChange={(e) => handlerDietsChange(e)} />
              <p>Whole 30</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="pescatarian" onChange={(e) => handlerDietsChange(e)} />
              <p>Pescatarian</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="ketogenic" onChange={(e) => handlerDietsChange(e)} />
              <p>Ketogenic</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="fodmap friendly" onChange={(e) => handlerDietsChange(e)} />
              <p>Fodmap friendly</p>
            </label>
            <label htmlFor="">
              <input type="radio" name="diets" value="paleolithi" onChange={(e) => handlerDietsChange(e)} />
              <p>Paleolithi</p>
            </label>
          </div>
        </div>
      </div>

      <hr />

      <div className={f.containerOrigin}>
        <h3>Creado En</h3>
        <div className={f.dBaseApi}>
          <BotonOrigen value="db" onClick={(e) => handlerOriginChange(e)}>DB</BotonOrigen>
          <BotonOrigen value="api" onClick={(e) => handlerOriginChange(e)}>API</BotonOrigen>
        </div>
      </div>

      <hr />

      <div className={f.containerOrden}>
        <h3>Orden Por</h3>
        <div className={f.containerAbcHealthS}>
          <div className={f.ordenABC}>
            <h4 value="all" onClick={(e) => handlerAbcChange(e)}>Alfabeticamente</h4>
            <div className={f.iconos}>
              <button className={f.icono1} value="asc" onClick={(e) => handlerAbcChange(e)}>{`A - Z`}</button>
              <button className={f.icono2} value="desc" onClick={(e) => handlerAbcChange(e)}>{`Z - A`}</button>
            </div>
          </div>
          <div className={f.ordenHealthScore}>
            <h4 value="all" onClick={(e) => handlerHealthScoreChange(e)}>Health Score</h4>
            <div className={f.iconosHealth}>
              <button className={f.icono3} value="mas" onClick={(e) => handlerHealthScoreChange(e)}>+</button>
              <button className={f.icono4} value="menos" onClick={(e) => handlerHealthScoreChange(e)}>_</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;