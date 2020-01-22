import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WeatherD from './components/WeatherD';
import Search from './components/Search';
import axios from 'axios';
import uuid from 'uuid';
ReactDOM.render(<App />, document.getElementById('root'));

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearching:true,
      city:{},
      q:'',
      error:'',
      searchedCity:[]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({isSearching:false});
    this.getData(e.target.querySelector("#search").value.toLowerCase());
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({q:e.target.value});
  }
  handleClick(e, cityName) {
    this.setState({
      searchedCity: this.state.searchedCity.filter(city => city.name.toLowerCase() !== cityName)
    });
  }
  removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};

    for(let i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  getData(search) {
   setTimeout(() => {
    fetch(`//api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_OW_KEY}`)
    .then((response) => {return response.json()})
    .then((data) => {
      if (data.cod != '404') {
          this.setState({isSearching:true, city:data, error:''});
          this.state.searchedCity.push(data);
          this.setState({searchedCity: this.removeDuplicates(this.state.searchedCity, "name")});
          console.table(this.removeDuplicates(this.state.searchedCity, "name"));
      } else {
          this.setState({isSearching:true, error:data.message});
          throw new Error(`${data.message}`);
      }
    })
    .catch(function(err) {
        console.error(err);
    })
   }, 1000);
  }
  render() {
    const {error, city, isSearching, q, searchedCity} = this.state;
    return (
      <>
        <h1>Ultimate Weather App</h1>
        <br />
        <br />
        <Search submitHandler={this.handleSubmit} changeHandler={this.handleChange} searchValue={q} />
        <br />
        <center><div class='WeatherD'>
        {!isSearching ? (<img src={require("./loading.gif")} id="load_img" />) : ([error === '' ? ([searchedCity.length != 0 ? (<WeatherD City={city.name} CountryID={city.sys.country} Weather={city.weather[0].main} WD={city.weather[0].description} Mint={city.main.temp_min} Maxt={city.main.temp_max} Location={city.coord.lon+", "+city.coord.lat} isSearched={false} />) : (<></>)]) : (<h1>{error}</h1>)]
        )}
        </div></center>
        <br />
        <>
        {searchedCity.length != 0 ? ([searchedCity.map((city, index) => {
         return <WeatherD City={city.name} CountryID={city.sys.country} Weather={city.weather[0].main} WD={city.weather[0].description} Mint={city.main.temp_min} Maxt={city.main.temp_max} Location={city.coord.lon+", "+city.coord.lat}
         clickHandler={this.handleClick}
         isSearched={true} Id={city.id} />
         })]) : (<h1>No city searched</h1>)
        }
        </>
      </>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// @copyRights NajeemB
