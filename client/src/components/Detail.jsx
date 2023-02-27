import React, {useEffect, useState} from "react";
import { getFoodById } from "../redux/actions/actions";
import SubmarinoMalo from "../assets/Imagenes/Submarino-malo.png";
import Loading from "../assets/Imagenes/Loading.png";
import { connect } from "react-redux";

import d from "./Detail.module.css";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px transparent;
`;

const ContainerUL = styled.ul`
  padding-left: 0;
  list-style: none;
  text-align: left;
`;


const Detail = (props) => {
  const { match, detailFood, errorGetDetail, getFoodById } = props;
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    getFoodById(match);
    detailFood.id == match && setIsLoading(false);
  },[getFoodById, match, detailFood.id])//detailFood.id]

  console.log(detailFood);

    if(Object.keys(errorGetDetail).length === 0){
      if(!isLoading){
        return(
          <DetailContainer className={d.detailContainerDetail}>
            <div className={d.relleno}></div>
            <div className={d.detailBodega}>
              <div className={d.group1}>
                <div className={d.imageAndTitle}>
                  <div className={d.containerImageRecipe}>
                    <img className={d.imageRecipe} src={detailFood.image} alt={`Imagen Receta`}/>
                  </div>
                  <h2>{detailFood.name}</h2>
                </div>
                <div className={d.containerSummary}>
                  <h2>Summary</h2>
                  <p>{detailFood.summary}</p>
                </div>
              </div>
              <div className={d.group2}>
                <div className={d.stepsContainer}>
                  <h2>Step By Step</h2>
                  <ContainerUL>
                    {
                      detailFood.stepbystep?.map((paso) => (
                        <li key={paso.number}>Paso N{paso.number}; {paso.step}</li>
                      ))
                    }
                  </ContainerUL>
                </div>
                <div className={d.levelDietas}>
                  <div className={d.healthScore}>
                    <h2>HealthScore</h2>
                    <div>
                      <span>{detailFood.level}</span>
                    </div>
                  </div>
                  <div className={d.dietas}>
                    <h2>Diets</h2>
                    <ContainerUL className={d.dietasLista}>
                      {
                        detailFood.Diets?.map((elem) => (
                          <li key={elem.number}>{elem.name}</li>
                        ))
                      }
                    </ContainerUL>
                  </div>
                </div>
              </div>
            </div>
          </DetailContainer>
        );
      }
      return(
        <DetailContainer className={d.detailContainerLoading}>
          <div className={d.relleno}></div>
          <div className={d.containerLoading}>
            <div>
              <img className={d.imagen} src={Loading} alt="Imagen De Un Plato De Ensaladas; Loading..." />
            </div>
            <div>
              <h2 className={d.title}>Loading......</h2>
            </div>
          </div>
        </DetailContainer>
      );
    }else{
      return(
        <DetailContainer className={d.detailContainerError}>
          <div className={d.relleno}></div>
          <div className={d.containerError}>
            <div className={d.titleAndImageError}>
              <h1>{errorGetDetail.Error}</h1>
              <img className={d.imageError} src={SubmarinoMalo} alt="Icono De Error 'Sudmarino Malo'" />
            </div>
          </div>
        </DetailContainer>
      );
    }
};

const mapStateToProps = (state) => {
  return {
    detailFood: state.detailFood,
    errorGetDetail: state.errorGetDetail,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFoodById: (id) => dispatch(getFoodById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);


/**
 * Imagen De Fondo Detail y Loading
 * ////////////////////////////////
 * https://img.freepik.com/foto-gratis/vista-anterior-verduras-frescas-picadas-enteras-tabla-cortar-tazones-especias-toalla-blanca-sobre-superficie-negra_179666-42337.jpg?w=2000&t=st=1677347915~exp=1677348515~hmac=bed42a1b5d30f8958e874e6348a48e967a4b20ad025bdc4b269bfbb114ed2627
 */



/**
 * <a href="https://ibb.co/sPDfSjX"><img src="https://i.ibb.co/vBrF51M/vista-anterior-verduras-frescas-picadas-enteras-tabla-cortar-tazones-especias-toalla-blanca-sobre-su.jpg" alt="vista-anterior-verduras-frescas-picadas-enteras-tabla-cortar-tazones-especias-toalla-blanca-sobre-su" border="0"></a><br /><a target='_blank' href='https://es.imgbb.com/'>pagina para descargar gif</a><br />
 */

/**
 * https://fondosmil.com/fondo/27758.jpg
 * 
 * https://img.freepik.com/foto-gratis/negro-textura-concreto-sucio_1194-7661.jpg?w=2000&t=st=1677372668~exp=1677373268~hmac=b09c69af1c35c00e9e58643600e93e09bb4860af8edc0ce41282cabb41667a96
 */