import React from "react";
import LinkedinIcon from "../assets/Imagenes/linkedin.png";
import GithubIcon from "../assets/Imagenes/icons8-github-94.png";
import Redux from "../assets/Imagenes/redux-icon.png";
import PostgreSQL from "../assets/Imagenes/PostgreSQL-icon.png";
import iconReact from "../assets/Imagenes/logo-react-icon.png";
import NodeJS from "../assets/Imagenes/icon-NodeJS-3.png";
import iconHTML5 from "../assets/Imagenes/logo-html5-256.png";
import iconCSS3 from "../assets/Imagenes/logo-css3-256.png";
import iconSequelize from "../assets/Imagenes/icon-sequelize.png";
import iconExpress from "../assets/Imagenes/ex-icon-03.png";
// import KailyKinG from "../assets/Imagenes/Doshk.jpg";

import a from "./About.module.css";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100vw;
  height: 93vh;
  background: url('https://img.freepik.com/foto-gratis/vista-superior-tazon-comida-saludable-espacio-copia_23-2148381266.jpg?w=2000&t=st=1677431446~exp=1677432046~hmac=4a894f7057bd36297afa3834d81ef63d49c5070a29741a35bd16e837458d09fe');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  border: solid 1px transparent;
`;

const About = (props) => {

  return(
    <AboutContainer>
      <div className={a.SobreMiBodega}>
        <div className={a.grupo1}>
          <div className={a.infoAuthor}>
            <h3>Sobre Mi</h3>
            <div className={a.grupo2Parrafos}>
              <p>Mi nombre es Jorge, Soy de Santiago de Chile. Una nación situada al sur del continente sudamericano.
Se preguntaran ¿Quién soy…..?  que buena pregunta. Es una.. que no les sabría responder; Solo les podría decir que quiero,  busco,  hago o incluso lo que me gusta hacer y hacia dónde estoy entusiasmado en ir.
</p>
              <p>
                Llevo un buen tiempo en esto, claro no profesionalmente. E participado en páginas tipo freeCodeCamp o también como Khan Academy, en aquellas pagina seguía sus tutorial de html5 y Css. Desde que tuve la opción de usar un pc me llamó la atención de cómo hacían esos portales, páginas. Mientras más me metia en el tema, mas me gustaba, hasta que no me di cuenta ya cuando estaba dando mis primeras lineas de codigo, colocando colores a cajas, letras;
Viendo como con unos comandos podía hacer que las letras cambiarán de tamaño y también de tipo de letras. Mientras más cosas hacía más me sumergía, y así más adictivo se volvía, cada vez quería más. De hecho... voy por más.-
              </p>
            </div>
          </div>
          <div className={a.containerImagenAuthor}>
            {/* <img className={a.imageAuthor} src={KailyKinG} alt="Fotogracfia De KailykinG EDK" /> */}
            {/* <h3 style={{color: 'white', paddingTop: '10px', margin: '0px',}}>KailyKinG EDK</h3> */}
          </div>
          <div className={a.containerContact}>
            <h3>Contacto</h3>
            <div className={a.containerImageContac}>
              <div className={a.cardContact}>
                <a href="https://github.com/KailyKinG" target="_blank" rel="noreferrer"><img className={a.imageContact} height="92px" src={GithubIcon} alt="Icono De GitHub" /></a>
              </div>
              <div className={a.cardContact}>
              <a href="https://www.linkedin.com/in/jorge-manuel-bravo-sep%C3%BAlveda-a63365175/" target="_blank" rel="noreferrer"><img height="92px" src={LinkedinIcon} alt="Icono De Linkedin" /></a>
                </div>
            </div>
          </div>
        </div>
        <div className={a.grupo2}>
          <div className={a.containerInfoApi}>
            <h3>Sobre La App</h3>
            <div className={a.grupoParrafos}>
              <p>
                Mi aplicación se llama ‘Carta AppFoods’. Es una Single Page Application. Donde al momento de que el usuario se enfrente a ella, se encontrará con una Landing Page de bienvenida. Está misma con un mensaje, también con el nombre de la app y un botón que le invita a entrar, a explorar la aplicaion.
              </p>
              <p>
                Una vez dentro, se encontrarán con el home. Está misma está formada por una barra superior de navegación,  una barra lateral con los diferentes filtros, una sección central donde se muestran 9 cartas con el nombre, la imagen y los tipos de dietas de una receta en particular. Y otra barra lateral, pero esta vez a la derecha con el paginado de la App.
al presionar cada botón de este paginado, la sección central va mostrando las siguientes nueve cartas, las siguiente nueve recetas.Al presionar una de las cartas de recetas, más bien hacer click en el nombre que se encuentra en estas recetas. Esta misma nos redirige a otra page con el detalle completo de la receta. Y por si fuera poco se le proporciona a los usuarios una page especial para que ellos mismos puedan crear sus propias recetas.
  </p>
            </div>
          </div>
          <div className={a.containerTecnology}>
            <h3>Tecnologias Ocupadas</h3>
            <div className={a.tecnologias}>
              <div className={a.backEnd}>
                <h3>Back-End</h3>
                <div className={a.groupTech}>
                  <div className={a.tecno}><a href="https://sequelize.org/" target='_blank' rel="noreferrer"><img className={a.imagenTech1} src={iconSequelize} alt="Icono De Sequelize" /></a></div>
                  <div className={a.tecno}><a href="https://expressjs.com/" target='_blank' rel="noreferrer"><img className={a.imagenTech2} src={iconExpress} alt="Icono De Express" /></a></div>
                  <div className={a.tecno}><a href="https://www.postgresql.org/" target='_blank' rel="noreferrer"><img className={a.imagenTech3} src={PostgreSQL} alt="Icono De PostgresSQL" /></a></div>
                  <div className={a.tecno}><a href="https://nodejs.org/es/" target='_blank' rel="noreferrer"><img className={a.imagenTech4} src={NodeJS} alt="Icono De Node JS" /></a></div>
                </div>
              </div>
              <div className={a.frontEnd}>
                <h3>Front-End</h3>
                <div className={a.groupTech}>
                  <div className={a.tecno}><a href="https://es.reactjs.org/" target='_blank' rel="noreferrer"><img className={a.imagenTech5} src={iconReact} alt="Icono De React" /></a></div>
                  <div className={a.tecno}><a href="https://react-redux.js.org/" target='_blank' rel="noreferrer"><img className={a.imagenTech6} src={Redux} alt="Icono De Redux" /></a></div>
                  <div className={a.tecno}><a href="https://www.w3schools.com/html/" target='_blank' rel="noreferrer"><img className={a.imagenTech7} src={iconHTML5} alt="Icono De HTML" /></a></div>
                  <div className={a.tecno}><a href="https://www.w3schools.com/css/" target='_blank' rel="noreferrer"><img className={a.imagenTech8} src={iconCSS3} alt="Icono De CSS" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};


export default About;

/**
 * Imagen De Fondo
 * ///////////////
https://img.freepik.com/foto-gratis/vista-anterior-verduras-frescas-picadas-enteras-tabla-cortar-tazones-especias-toalla-blanca-sobre-superficie-negra_179666-42337.jpg?w=2000&t=st=1677347915~exp=1677348515~hmac=bed42a1b5d30f8958e874e6348a48e967a4b20ad025bdc4b269bfbb114ed2627
 * 
https://pixabay.com/get/g7b9611748266981ae6bd2ce22684c40991c62cc9ccf79e032b305a6fc10157ffc3a22a3c2ac324dc77bfe625fd4aa2a5f2e169750272492b90bdc661d7fdf42a_1920.jpg
https://img.freepik.com/foto-gratis/vista-superior-tazon-comida-saludable-espacio-copia_23-2148381266.jpg?w=2000&t=st=1677431446~exp=1677432046~hmac=4a894f7057bd36297afa3834d81ef63d49c5070a29741a35bd16e837458d09fe


*/