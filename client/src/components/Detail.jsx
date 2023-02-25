import React, {useEffect} from "react";

// import d from "./Detail.module.css";
// import styled from "styled-components";

const Detail = (props) => {
  const { match } = props;
  console.log("match Es: ", match);

  return(
    <>
      <h1>Este Es El Componente 'Detail'</h1>
    </>
  );
};

export default Detail;