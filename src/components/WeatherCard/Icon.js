import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;
  return <Icon className="icon" alt="Weather icon" src="./img/12-Cloudy.png" />;
};

export default Icon;
