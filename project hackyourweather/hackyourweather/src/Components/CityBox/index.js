import React from "react";
import "./styles.css";

function CityBox(props) {
  const city = props.data;

  return (
    <div>
      {city.cod === 200 && (
        <div className="cityBox found">
          <div className="header">
            <h1>
              {city.name} {city.sys.country}
            </h1>
            <button
              className="removeButton"
              onClick={() => {
                props.removeCity(props.index);
              }}
            >
              X
            </button>
          </div>

          <div className="weather">
            <h3>{city.weather[0].main}</h3>
            <h4>{city.weather[0].description}</h4>
          </div>
          <p>min temp : {(city.main.temp_min - 273.15).toFixed(1)} °C</p>
          <p>max temp : {(city.main.temp_max - 273.15).toFixed(1)}°C</p>
          <p>
            location : lon {city.coord.lat}, lat {city.coord.lon}
          </p>
        </div>
      )}
    </div>
  );
}

export default CityBox;
