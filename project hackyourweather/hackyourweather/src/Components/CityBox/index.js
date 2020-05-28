import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function CityBox(props) {
  const city = props.data;

  const linkStyle = {
    listStyleType: "none",
    textDecoration: "none",
    color: "black",
  };

  return (
    <div>
      {city.cod === 200 && (
        <div className="cityBox found">
          <div className="header">
            <Link to={`/${city.id}`} style={linkStyle} key={uuidv4()}>
              <h1>
                {city.name} {city.sys.country}
              </h1>
            </Link>
            <button
              className="removeButton"
              onClick={() => {
                props.removeCity(props.index);
              }}
            >
              X
            </button>
          </div>
          <Link to={`/${city.id}`} style={linkStyle} key={uuidv4()}>
            <div className="weather">
              <h3>{city.weather[0].main}</h3>
              <h4>{city.weather[0].description}</h4>
            </div>
          </Link>
          <Link to={`/${city.id}`} style={linkStyle} key={uuidv4()}>
            <p>min temp : {(city.main.temp_min - 273.15).toFixed(1)} °C</p>
            <p>max temp : {(city.main.temp_max - 273.15).toFixed(1)}°C</p>
            <p>
              location : lon {city.coord.lat}, lat {city.coord.lon}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CityBox;
