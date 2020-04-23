import React from 'react';
import './styles.css'


function CityBox(props) {
    const city = props.data
    return (
        <div className="cityBox">
            <h1>{city.name} , {city.sys.country}</h1>
            <div className='weather'>
                <h3>{city.weather[0]['main']}    </h3>
                <h4>{city.weather[0]['description']}</h4>
            </div>
            <p>min temp : {city.main.temp_min}</p>
            <p>max temp :{city.main.temp_max}</p>
            <p>location :{city.coord.lat}, {city.coord.lon}</p>
        </div>
    )
}


export default CityBox;