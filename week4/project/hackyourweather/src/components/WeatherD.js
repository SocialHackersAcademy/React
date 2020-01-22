import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useParams} from 'react-router';
import SearchedCity from './SearchedCity';
const WeatherD = (props) => {

    return (
      <div class="WeatherD">
      <div class={props.isSearched ? 'close' : 'no-close'} onClick={e => props.clickHandler(e, props.City.toLowerCase())} id={props.Id}><b>X</b></div>
      <br />
      <br />
      <br />
      <Link to={{ pathname:'/searchedcity/'+props.City+'/'+props.CountryID, state:{from:props.location}}}><h1><b>{props.City},&nbsp;{props.CountryID}</b></h1></Link>
      <br />
      <br />
      <h2>{props.Weather}</h2>
      <h3>{props.WD}</h3>
      <br />
      <br />
      <h4>Min temp: {props.Mint}</h4>
      <br />
      <h4>Max temp: {props.Maxt}</h4>
      <br />
      <h4>Location: {props.Location}</h4>
      </div>
    )
}
export default WeatherD;
