import React from 'react';
import './styles.css'



function CityBox(props) {
    const city = props.data

    return (
        <div>
            {city.cod === 200 && < div className="cityBox found" >

                <h1> {city && city.name} {city && city.sys.country}</h1>
                <div className='weather'>
                    <h3>{city && city.weather[0].main}</h3>
                    <h4>{city && city.weather[0].description}</h4>
                </div>
                <p>min temp : {city && (city.main.temp_min - 273.15).toFixed(1)} °C</p>
                <p>max temp : {city && (city.main.temp_max - 273.15).toFixed(1)}°C</p>
                <p>location : {city && city.coord.lat} {city && city.coord.lon}</p>
            </ div>}
            {city.cod !== 200 && <div className="notFound">
                <h3> City not found, please check your spelling.</h3>
            </div>}
        </div>
    )
}


export default CityBox;