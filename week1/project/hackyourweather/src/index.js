import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CityList from './city-weather.json';
ReactDOM.render(<App />, document.getElementById('root'));

class WeatherD extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='WeatherD'>
      <h1><b>{this.props.City},&nbsp;{this.props.CountryID}</b></h1>
      <br />
      <br />
      <h2>{this.props.Weather}</h2>
      <h3>{this.props.WD}</h3>
      <br />
      <br />
      <h4>Min temp: {this.props.Mint}</h4>
      <br />
      <h4>Max temp: {this.props.Maxt}</h4>
      <br />
      <h4>Location: {this.props.Location}</h4>
      </div>
    )
  }
}
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading:false,
      list:[]
    }
  }
  getData() {
   setTimeout(() => {
    CityList.map((city, index) => {
      this.state.list[index] = city;
    });
    this.setState({isLoading:true});
    console.table(CityList);
   }, 10000);
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const {list, isLoading} = this.state;
    if (!isLoading) {
      return <h2>Is loading...</h2>
    }
    return (
      <>
      <h1>Ultimate Weather App</h1>
      <br />
      <br />
      {
        list.map((city) => {
           return <WeatherD City={city.name} CountryID={city.sys.country} Weather={city.weather[0].main} WD={city.weather[0].description} Mint={city.main.temp_min} Maxt={city.main.temp_max} Location={city.coord.lon+", "+city.coord.lat} />
        })
      }
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
