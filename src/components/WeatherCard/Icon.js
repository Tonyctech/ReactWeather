import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;
  var icon = "";
  switch (props.condition) {
    case "Clear":
      break;
    case "Clouds":
      break;
    case "":
      break;
    case "Clear":
      break;
    default:
      break;
  }
  return <Icon className="icon" alt="Weather icon" src="./img/12-Cloudy.png" />;
};

export default Icon;
