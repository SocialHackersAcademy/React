import React from 'react';
import './styles.css'


function CityBox(props) {
    const city = props.data
    const minTemp = (city.main.temp_min - 273.15).toFixed(1)
    const maxTemp = (city.main.temp_max - 273.15).toFixed(1)



    return (
        <div className="cityBox">
            <h1>{city.name} , {city.sys.country}</h1>
            <div className='weather'>
                <h3>{city.weather[0]['main']}    </h3>
                <h4>{city.weather[0]['description']}</h4>
            </div>
            <p>min temp : {minTemp} °C</p>
            <p>max temp :{maxTemp} °C</p>
            <p>location :{city.coord.lat}, {city.coord.lon}</p>
        </div>
    )
}


export default CityBox;