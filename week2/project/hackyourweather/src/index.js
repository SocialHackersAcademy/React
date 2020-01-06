import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WeatherD from './components/WeatherD';
import Search from './components/Search';
ReactDOM.render(<App />, document.getElementById('root'));

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearching:false,
      city:{},
      q:'amsterdam',
      error:''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({isSearching:false});
    this.getData(e.target.querySelector("#search").value.toLowerCase());
  }
  getData(search) {
   setTimeout(() => {
    fetch(`//api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_OW_KEY}`)
    .then((response) => {return response.json()})
    .then((data) => {
      if (data.cod != '404') {
          this.setState({isSearching:true, city:data, error:''});
          console.table(this.state.city);
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
  componentDidMount() {
    this.getData(this.state.q);
  }
  render() {
    const {error, city, isSearching} = this.state;
    return (
      <div class='WeatherD'>
        <h1>Ultimate Weather App</h1>
        <br />
        <br />
        <Search submitHandler={this.handleSubmit} />
        <br />
        {!isSearching ? (<img src={require("./loading.gif")} id="load_img" />) : ([error === '' ? (<WeatherD City={city.name} CountryID={city.sys.country} Weather={city.weather[0].main} WD={city.weather[0].description} Mint={city.main.temp_min} Maxt={city.main.temp_max} Location={city.coord.lon+", "+city.coord.lat} />) : (<h1>{error}</h1>)]
        )}
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// @copyRights NajeemB
