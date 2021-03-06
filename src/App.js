import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-20} condition="Shower" />
      <WeatherCard temp={15} condition="Damp" />
      <WeatherCard temp={20} />
    </div>
  );
}

export default App;
