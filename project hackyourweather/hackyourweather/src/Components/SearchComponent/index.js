import React, { useState, useEffect } from "react";
import "./styles.css";
import CityBox from "./../CityBox";

const APIKEY = "4bde5fff659a96c59438421c777e914e";

function SearchComponent() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState([]);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

  function submitHandler(e) {
    e.preventDefault();

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== "404") {
          setCityData([data, ...cityData]);
        } else if (data.cod === "404") {
          alert("City can't be found, please check your spelling");
        }
      });

    setCityName("");
  }

  function removeCity(index) {
    const newCityData = [...cityData];
    newCityData.splice(index, 1);
    setCityData(newCityData);
  }

  useEffect(() => {
    const localData = localStorage.getItem("cities");
    if (localData) {
      setCityData(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cityData));
  }, [cityData]);

  return (
    <div>
      <form onSubmit={submitHandler} className="searchBar">
        <input
          type="text"
          value={cityName}
          required
          placeholder="Search City"
          onChange={(e) => setCityName(e.target.value)}
        />

        <input type="submit" value="Search" />
      </form>
      {cityData &&
        cityData.map((city, index) => {
          return (
            <CityBox
              key={index}
              index={index}
              data={city}
              removeCity={removeCity}
            />
          );
        })}
    </div>
  );
}

export default SearchComponent;
