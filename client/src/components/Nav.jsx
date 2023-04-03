import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Imagenes/food-restaurant.png"

import n from "./Nav.module.css";
import styled from "styled-components";

const BotonLogout = styled.button`
  width: 5rem;
  height: 1.7rem;
  border-radius: 10px;
  border:none;
  background-color: red;
  color: #ffffffda;
  font-weight: bold;
  font-size: 0.9rem;
  margin-left: 1rem;
  &:active {
    transform:scale(0.9);
  }
`;

const Nav = (props) => {
  const { setCurrentPage } = props;

  return (
    <nav className={n.containerNav}>
      <div className={n.containerLogo}>
        <Link to='/home'>
          <img className={n.imagen} src={Logo} alt="Logo"/>
        </Link>
        <NavLink className={n.linkh4} to='/home'>
          <h4>Henry Carta AppFoods</h4>
        </NavLink>
      </div>

      <ul className={n.containerUl}>
        <NavLink style={(isActive) => ({
          color: isActive ? 'grey' : 'white',
          textDecorationLine: 'none',
          borderStyle: 'solid',
          borderColor: isActive ? 'grey' : 'transparent',
          borderWidth: '1px',
          borderRadius: '5px',
          padding: '5px'
        })} to='/home'>
          <li>Home</li>
        </NavLink>
        <NavLink style={(isActive) => ({
          color: isActive ? 'grey' : 'white',
          textDecorationLine: 'none',
          borderStyle: 'solid',
          borderColor: isActive ? 'grey' : 'transparent',
          borderWidth: '1px',
          borderRadius: '5px',
          padding: '5px'
        })} to='/form'>
          <li>Form</li>
        </NavLink>
        <NavLink style={(isActive) => ({
          color: isActive ? 'grey' : 'white',
          textDecorationLine: 'none',
          borderStyle: 'solid',
          borderColor: isActive ? 'grey' : 'transparent',
          borderWidth: '1px',
          borderRadius: '5px',
          padding: '5px'
        })} to='/about'>
          <li>About</li>
        </NavLink>
      </ul>

      <div className={n.containerSearch_Logout}>
        <SearchBar setCurrentPage={setCurrentPage} />
        <NavLink to='/'>
          <BotonLogout>
            Logout
          </BotonLogout>
        </NavLink>
      </div>
    </nav>
  );
};


export default Nav;