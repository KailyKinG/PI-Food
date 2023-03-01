import React, {useState } from "react";
import { getAllFoodByName } from "../redux/actions/actions";
import { connect } from "react-redux";

// import s from "./SearchBar.module.css";
import styled from "styled-components";

const SearchComponent = styled.input`
  width: 11rem;
  height: 1.7rem;
  font-size: 0.9rem;
  padding-left: 10px;
  border-radius: 10px;
  background-color: black;
  color:white;
  border:1px solid transparent;
  &::placeholder{
    color: #ffffffb1;
  }
  &:hover {
    box-shadow: 0 0 5px 1px blue;
  }
`;


const SearchBar = (props) => {
  const { getAllFoodByName, paginado } = props;
  const [search, setSearch] = useState("");

  const handlerChange = (e) => {
    const valor = e.target.value;
    setSearch(valor);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    getAllFoodByName(search);
    setSearch("");
    paginado(1);
  }

  return(
    <>
      <SearchComponent type='search' name='search' value={search} onChange={handlerChange} placeholder='Search Recipe...' />
      <button onClick={(e) => handlerSubmit(e)}>Search</button>
      {/* <p>{search}</p> */}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllFoodByName: (busqueda) => dispatch(getAllFoodByName(busqueda)),
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);