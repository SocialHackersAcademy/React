import React from 'react';
import './styles.css';
import cityWeather from './../../city-weather.json'
import CityBox from './../CityBox/index'





function CitiesTable() {
    return (
        <div>
            <h1>Weather</h1>
            {cityWeather.map(city => {
                return <CityBox key={city.name} data={city} />
            })}
        </div>
    )
}



export default CitiesTable;
