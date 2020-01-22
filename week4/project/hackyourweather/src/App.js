import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchedCity from './components/SearchedCity';
import Home from './components/Home';
import {Route} from 'react-router-dom';

function App() {
  return (
     <div className="App">
      <Route exact path="/" render={({ match }) => <Home match={match} />} />
      <Route exact path="/searchedcity/:cityId/:countryId" render={({ match }) => <SearchedCity match={match} />} />
     </div>
  );
}

export default App;
