import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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
    fetch("//api.openweathermap.org/data/2.5/group?id=2643743,2759794,1850147&units=metric&appid=61e55a3ce4e8a3cb801d0d31649a27c6")
    .then((response) => {return response.json()})
    .then((data) => {
      data.list.map((item, index) => {
        this.state.list[index] = item
      })
      this.setState({isLoading:true});
      console.table(this.state.list);
    })
    .catch(function(err) {
        console.log('Fetch Error :-S '+err)
    })
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
        list.map((item) => {
           return <WeatherD City={item.name} CountryID={item.sys.country} Weather={item.weather[0].main} WD={item.weather[0].description} Mint={item.main.temp_min} Maxt={item.main.temp_max} Location={item.coord.lon+", "+item.coord.lat} />
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
