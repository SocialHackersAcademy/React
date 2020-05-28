import React from "react";
import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityBox from "./Components/CityBox";
import CityForecast from "./Components/CityForecast";

CityBox.data = {};

//Fix the remove button that became a link.

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>Weather </h1>

            <SearchComponent />
          </Route>
          <Route path="/:id" component={CityForecast} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
