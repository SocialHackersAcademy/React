import React, { useState, useEffect } from "react";
import './styles.css'
import CityBox from './../CityBox'



const APIKEY = '4bde5fff659a96c59438421c777e914e'



function SearchComponent() {

    let [cityName, setCityName] = useState('')
    let [cityData, setCityData] = useState()





    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`

    async function submitHandler(e) {
        e.preventDefault()

        await fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCityData(data)
                console.log('the setted data is ', data)

            })

    }

    useEffect(() => {

    }, [cityData])



    return (
        <div >
            <form onSubmit={submitHandler} className="searchBar">
                <input type='text' required placeholder='Search City' onChange={(e) => setCityName(e.target.value)} />
                <input type='submit' value='Search' />
            </form>
            {cityData && <CityBox data={cityData} />}
        </div>
    )
}

export default SearchComponent;