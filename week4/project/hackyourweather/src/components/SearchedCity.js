import React from 'react';
import ReactDOM from 'react-dom';
import {useParams} from 'react-router';
import {useHistory} from 'react-router-dom';
import {
  CartesianGrid,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";
import {useEffect, useState} from 'react';
const SearchedCity = () => {
    const {cityId, countryId} = useParams();
    const history = useHistory();
    const [cityData, setCityData] = useState([]);
    const datad = [];
    const test_data = [];
    useEffect(() => {
       fetch(`//api.openweathermap.org/data/2.5/forecast?q=${cityId.toLowerCase()}&appid=${process.env.REACT_APP_OW_KEY}`)
       .then((response) => {return response.json()})
       .then((data) => {
            data.list.map((day, index) => {
              datad[index] = {
                day:day.dt_txt,
                temp:day.main.temp,
                mint:day.main.temp_min,
                maxt:day.main.temp_max,
                pr:day.main.pressure
              }
            });
            setCityData(datad.slice(0, 5));
       })
       .catch(function(err) {
           console.error(err);
       })
       console.table(cityData);
    }, [cityData]);
    return (
      <>
       <h1><b>5 days forecast</b></h1>
       <h2><b>{`${cityId} ${countryId}`}</b></h2>
       <center><ComposedChart
        width={950}
        height={490}
        data={cityData}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="temp" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="mint" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="maxt" stroke="#ff7300" />
				<Scatter dataKey="pr" fill="red" />
      </ComposedChart></center>
      <br />
      <br />
      <br />
      <button onClick={(e) => {history.goBack()}} id="back_button">Go back</button>
      <br />
      <br />
      </>
    )
}
export default SearchedCity;
