import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import fondoComida from "../assets/Imagenes/vista-superior-variedad-alimentos-saludables.jpg";

import f from "./Form.module.css";
import styled from "styled-components";

const ContainerForm = styled.form`
  width:100vw;
  height:54.45rem;
  background-color: rgb(38,38,38);
  color: #ffffffde;
  border:solid 1px transparent;
`;

const handlerSubmit = (e) => {
  e.preventDefault();
}

const Form = (props) => {
  let idPasoAPaso = 0;
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    summary: "",
    level: 0,
    stepbystep: [],
    dietas: [],
  });

  const dietas = useSelector((state) => state.diets);

  return(
    <ContainerForm onSubmit={handlerSubmit}>
        <div className={f.tresColumnas}>
          <div className={f.containerLogo}>
            <h2>Crea Tu Receta</h2>
            <div>
              <label htmlFor="">
                Name:
                <input type="text" name="name" value="" onChange="" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Imagen:
                <input type="text" name="imagen" value="" onChange="" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Level:
                <input type="number" name="level" value="" onChange="" />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Summary:
                <textarea cols="30" rows="10" name="summary" onChange=""></textarea>
              </label>
            </div>
          </div>


          {/* Seccion De FirstData */}
          {/* ///////////////////// */}
          <div className={f.firstDatas}>
            <h2>StepByStep</h2>
          </div>

          
          {/* Seccion De SecondData */}
          {/* ///////////////////// */}
          <div className={f.secondDatas}>
            <h2>Diets</h2>
            <div className={f.inputsRadios}>
              <div className={f.grupo1}>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="vegetarian" onChange="" />
                  <p>Vegetarian</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="gluten free" onChange="" />
                  <p>Gluten Free</p>
                </label>
                <label className={f.Spetial} htmlFor="">
                  <input type="checkbox" name="dietas" value="lacto ovo vegetarian" onChange="" />
                  <p>Lacto Ovo Vegetarian</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="dairy free" onChange="" />
                  <p>Dairy Free</p>
                </label>
              </div>
              <div className={f.grupo2}>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="vegan" onChange="" />
                  <p>Vegan</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="paleolithic" onChange="" />
                  <p>Paleolithic</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="primal" onChange="" />
                  <p>Primal</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="whole 30" onChange="" />
                  <p>Whole 30</p>
                </label>
              </div>
              <div className={f.grupo3}>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="pescatarian" onChange="" />
                  <p>Pescatarian</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="ketogenic" onChange="" />
                  <p>Ketogenic</p>
                </label>
                <label htmlFor="">
                  <input type="checkbox" name="dietas" value="fodmap friendly" onChange="" />
                  <p>Fodmap Friendly</p>
                </label>
              </div>
            </div>


            <div className={f.visorElejidos}></div>
          </div>
        </div>
        
        <div className={f.containerButton}>
          <button className={f.sendBoton}>Enviar</button>
        </div>
    </ContainerForm>
  );
};

export default Form;