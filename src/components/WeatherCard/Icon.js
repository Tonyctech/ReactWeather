import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (props.condition) {
    case "High Pressure":
      icon = `./img/svg/01-Pressure.svg`;
      break;
    case "Low Pressure":
      icon = `./img/svg/01-Pressure_1.svg`;
      break;
    case "Windy":
      icon = `./img/svg/03-windy.svg`;
      break;
    case "Damp":
      icon = `./img/svg/04-Damp.svg`;
      break;
    case "Shower":
      icon = `./img/svg/05-Shower.svg`;
      break;
    case "Pour":
      icon = `./img/svg/06-Pour.svg`;
      break;
    case "Storms":
      icon = `./img/svg/07-Storms.svg`;
      break;
    case "Storms1":
      icon = `./img/svg/08-Storms`;
      break;
    case "Snow":
      icon = `./img/svg/09-Snow.svg`;
      break;
    case "Sleet":
      icon = `./img/svg/10-Sleet.svg`;
      break;
    case "Partly Cloudy":
      icon = `./img/svg/11-Partly-Cloudy.svg`;
      break;
    case "Cloudy":
      icon = `./img/svg/12-Cloudy.svg`;
      break;
    case "Scattered Storms":
      icon = `./img/svg/13-Scattered-T-Storms.svg`;
      break;
    case "Isolated Storms":
      icon = `./img/svg/14-Isolated-T-Storms.svg`;
      break;
    case "Sunny":
      icon = `./img/svg/15-Sun.svg`;
      break;
    case "Fair Day":
      icon = `./img/svg/16--fair-weather`;
      break;
    case "Fair Night":
      icon = `./img/svg/17--fair-weather`;
      break;
    case "Stormy Night":
      icon = `./img/svg/18-Storms.svg`;
      break;
    case "Rainy Night":
      icon = `./img/svg/19-Rain.svg`;
      break;
    case "Fair Night":
      icon = `./img/svg/20-Fair.svg`;
      break;
    case "Clear Night":
      icon = `./img/svg/21-Clear.svg`;
      break;
    case "Moon Phase":
      icon = `./img/svg/22-Moon_Phase.svg`;
      break;
    case "Humidity Low":
      icon = `./img/svg/23-Humidity.svg`;
      break;
    case "Humidity High":
      icon = `./img/svg/24-Humidity`;
      break;
    case "Celsuis":
      icon = `./img/svg/25-Celsius.svg`;
      break;
    case "Fahrenheit":
      icon = `./img/svg/26-Fahrenheit.svg`;
      break;
    case "Cold":
      icon = `./img/svg/27-Cold.svg`;
      break;
    case "Hot":
      icon = `./img/svg/28-Hot.svg`;
      break;
    case "SnowFlake":
      icon = `./img/svg/29-Snowflake.svg`;
      break;
    case "UV Index":
      icon = `./img/svg/30-UV-Index.svg`;
      break;
    default:
      break;
  }
  return <Icon className="icon" src={icon} alt="Weather icon" />;
};

export default Icon;
