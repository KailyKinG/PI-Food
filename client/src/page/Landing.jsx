import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/Imagenes/linkedin.png";
import GitHub from "../assets/Imagenes/icons8-github-94.png";

import l from "./Landing.module.css";
import styled from "styled-components";


const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://i.postimg.cc/sDcgdnWw/mano-femenina-que-sostiene-tomate-granja-organica.jpg');
  background-size: cover;
  background-position: center;
  border:solid 1px transparent;
`;


const BotonIngresar = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: monospace;
  border-radius: 5px;
  border: 1px solid #cdcaca;
  background-color: #5A6E0C;
  color: #fff6f6;
  text-shadow: 0px 0px 5px  black;
  box-shadow: 0 0 5px 1px #ADA8A8 inset;
  cursor: pointer;
  &:active{
    transform: scale(0.9);
  }
`;

const Landing = (props) => {

  return(
    <LandingContainer>
      <div className={l.containerLandingIntro}>
        <div className={l.titleAndIntro}>
          <div className={l.relleno1}></div>
          <div className={l.bodega}>
            <div className={l.bodegaTitle}>
              <h2>Comer Sano y Rico</h2>
            </div>
            <div className={l.bodegaBoton}>
              <Link to='/home'>
                <BotonIngresar>Ingresar</BotonIngresar>
              </Link>
            </div>
          </div>
          <div className={l.relleno2}></div>
        </div>
        <div className={l.containerLeyenda}>
          <div className={l.title}>
            <h1>Welcome to Carta AppFoods</h1>
          </div>
          <div className={l.leyenda}>
            <div className={l.relleno}></div>
            <div className={l.groupParrafos}>
              <p>
              Como debe de ser. Desde la huerta, desde el campo, de donde surge el fruto… a tu mesa.
Para hacer las mejores recetas, se necesitan los mejores productos. De las manos del agricultor, quien de la tierra sabe. tanto a cultivarla, a tratarla, tanto a extraer de la tierra la fruta, como a guiar el  camino para que sea posible que la fruta misma llegue a tu hogar.  
              </p>
              <p>
              De la misma forma. Te hacemos llegar esta carta con las mejores recetas que puedas tener.
Con ellas podrás hacer platos ricos y saludables, cuentas con una gran variedad de estas
que estarán a tu disposición. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={l.footer}>
        <small className={l.derechos}>Todos Los Derechos Recervados KailyKinG EDK, Santiago De Chile 2023.-</small>
        <div className={l.grupoContact}>
          <div className={l.contactGitHub}>
            <a href="https://github.com/KailyKinG" target="_blank" rel="noreferrer"><img className={l.image1} src={GitHub} alt="Icono De GitHub" /></a>
          </div>
          <div className={l.contactLinkedin}>
            <a href="https://www.linkedin.com/in/jorge-manuel-bravo-sep%C3%BAlveda-a63365175/" target="_blank" rel="noreferrer"><img className={l.image2} src={Linkedin} alt="Icono De Linkedin" /></a>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default Landing;


/**
 * https://img.freepik.com/foto-gratis/mano-femenina-que-sostiene-tomate-granja-organica_1150-6775.jpg?w=2000&t=st=1677464121~exp=1677464721~hmac=6bc5547a1ff8c0ad5752ed6b2b8ecc1932cd3bb448ab87b78e0a9e547c9219ae
 * https://i.postimg.cc/sDcgdnWw/mano-femenina-que-sostiene-tomate-granja-organica.jpg
 * https://img.freepik.com/foto-gratis/vista-cerca-mano-agricultores-recogiendo-manzana-huerto-frutas_342744-1026.jpg?w=2000&t=st=1677463605~exp=1677464205~hmac=cb2fc357d9969304581975707fde9e7d1ef5188c3a793d083ea3d63aab9de2fc
 */