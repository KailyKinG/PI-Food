import React, {useState} from "react";
import { createRecipes } from "../redux/actions/actions";
import validate from "./validate";
import { useDispatch } from "react-redux";

import f from "./Form.module.css";
import styled from "styled-components";

const ContainerForm = styled.form`
  width:100vw;
  min-height:54.45rem;
  background-image: url("https://img.freepik.com/foto-gratis/vista-superior-variedad-alimentos-saludables_23-2148381272.jpg?w=2000&amp;t=st=1677174458~exp=1677175058~hmac=8df90b251670b5716cf7c58f663533dbc4eaa9b996d130b170cad37179fb0135%22");
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border:solid 1px transparent;
`;

const EtiquetaParrafo = styled.p`
  margin: 0;
  height: 1.4375rem;
  font-family: monospace;
  font-weight: bold;
`;


//////////////////////////////////////////
//Inicio Del Componente Funcional 'Form'//
/////////////////////////////////////////
const Form = (props) => {
  const dispatch = useDispatch();
  let idPasoAPaso = 0;

  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    summary: "",
    level: "",
    step:"",
    dietas: [],
  });
  
  const [error, setError] = useState({
    name: "",
    image: "",
    summary: "",
    level: "",
    step:"",
    dietas: "",
  });

  console.log(inputs.dietas);


  const handlerTextChange = (e) => {
    const nombre = e.target.name;
    const valor = e.target.value;
    setInputs({
      ...inputs,
      [nombre]: valor
    });
    setError(validate({
      ...inputs,
      [nombre]: valor
    }));
  };
  

  const handlerDietasChange = (e) => {
    const dieta = e.target.value;
    setInputs({
      ...inputs,
      dietas: [...inputs.dietas, dieta],
    });
    setError(validate({
      ...inputs,
      dietas: [...inputs.dietas, dieta],
    }));
  };


  const handlerSubmit = (e) => {
    e.preventDefault();
    // Antes de enviar 
    // verificar que en inputs.dietas; no sean valores repetidos
    const stepByStep = {
      number: idPasoAPaso += 1,
      step: inputs.step,
    };
    setInputs({
      ...inputs,
      dietas: [...new Set([...inputs.dietas])],
    });

    // console.log([stepByStep]);
    // Aqui Enviamos la data para crear nuestra receta en base de datos
    dispatch(createRecipes({
      name: inputs.name,
      image: inputs.image,
      summary: inputs.summary,
      level: parseInt(inputs.level),
      stepbystep: [stepByStep],
      dietas: inputs.dietas,
    }));
    //aqui receteamos nuestros estados
    setInputs({
      name: "",
      image: "",
      summary: "",
      level: "",
      step:"",
      dietas: [],
    });
  }

  return(
    <ContainerForm onSubmit={handlerSubmit}>
      <div className={f.containerCENTRAL}>
        <h1>Create Your Recipe</h1>
        <div className={f.firstData}>
          <div className={f.info1}>
            <div>
              <label htmlFor="">
                <input type="text" name="name" value={inputs.name} onChange={(e) => handlerTextChange(e)} placeholder="Name" />
              </label>
              <EtiquetaParrafo className={f.danger}>{error.name}</EtiquetaParrafo>
            </div>
            <div>
              <label htmlFor="">
                <input type="text" name="image" value={inputs.image} onChange={(e) => handlerTextChange(e)} placeholder="Url Image" />
              </label>
              <EtiquetaParrafo className={f.danger}>{error.image}</EtiquetaParrafo>
            </div>
            <div>
              <label htmlFor="">
                <input type="text" name="level" value={inputs.level} onChange={(e) => handlerTextChange(e)} placeholder="Health Score"/>
              </label>
              <EtiquetaParrafo className={f.danger}>{error.level}</EtiquetaParrafo>
            </div>
          </div>
          <div className={f.info2}>
            <label htmlFor="">
              <textarea cols="45" rows="6" name="summary" value={inputs.summary} onChange={(e) => handlerTextChange(e)} placeholder="Summary Your Recipe..."></textarea>
            </label>
            <EtiquetaParrafo className={f.danger}>{error.summary}</EtiquetaParrafo>
          </div>
        </div>

        <hr />

        <div className={f.secondData}>
          <h2>StepByStep</h2>
          <label>
            <input type="text" name="step" value={inputs.step} onChange={(e) => handlerTextChange(e)} placeholder="step one..." />
          </label>
          <EtiquetaParrafo className={f.danger}>{error.step}</EtiquetaParrafo>
        </div>

        <hr />

        
        <div className={f.containerDietas}>
          <h2>Add Diets</h2>
          <div className={f.grupalDietas}>
            <div className={f.groupDiets_1}>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="vegetarian" onChange={(e) => handlerDietasChange(e)} />
                <p>Vegetarian</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="gluten free" onChange={(e) => handlerDietasChange(e)} />
                <p>Gluten Free</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="lacto ovo vegetarian" onChange={(e) => handlerDietasChange(e)} />
                <p>Lacto Ovo Vegetarian</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="dairy free" onChange={(e) => handlerDietasChange(e)} />
                <p>Dairy Free</p>
              </label>    
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="vegan" onChange={(e) => handlerDietasChange(e)} />
                <p>Vegan</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="paleolithic" onChange={(e) => handlerDietasChange(e)} />
                <p>Paleolithic</p>
              </label>
            </div>

            <div className={f.groupDiets_2}>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="primal" onChange={(e) => handlerDietasChange(e)} />
                <p>Primal</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="whole 30" onChange={(e) => handlerDietasChange(e)} />
                <p>Whole 30</p>
              </label>     
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="pescatarian" onChange={(e) => handlerDietasChange(e)} />
                <p>Pescatarian</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="ketogenic" onChange={(e) => handlerDietasChange(e)} />
                <p>Ketogenic</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="dietas" value="fodmap friendly" onChange={(e) => handlerDietasChange(e)} />
                <p>Fodmap Friendly</p>
              </label>
            </div>
          </div>
          <EtiquetaParrafo className={f.danger}>{error.dietas}</EtiquetaParrafo>
        </div>

        <div className={f.containerButton}>
          {
            Object.keys(error).length > 0 ?
              <button
                disabled={true}
                className={f.botonOff}
              >Create</button> :
              <button
                disabled={false}
                className={f.sendBoton}
              >Create</button>
          }
        </div>  
      </div>
      
      {/* Div De Relleno Para Ajustar El Formulario */}
      <div className={f.divRelleno}>
        {/* <p>{inputs.name}</p>
        <p>{inputs.image}</p>
        <p>{inputs.level}</p>
        <p>{inputs.summary}</p>
        <p>{inputs.step}</p>
        <p></p>
        <p>{inputs.dietas}</p> */}
      </div>
    </ContainerForm>
  );
};

export default Form;

/**
 * Guardar Importante
 * "https://img.freepik.com/foto-gratis/vista-superior-variedad-alimentos-saludables_23-2148381272.jpg?w=2000&amp;t=st=1677174458~exp=1677175058~hmac=8df90b251670b5716cf7c58f663533dbc4eaa9b996d130b170cad37179fb0135%22"
 */