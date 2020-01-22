import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './components/Friend';
import DogGallery from './components/DogGallery';
import RandomJoke from './components/RandomJoke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br />
      <Friend />
      <br />
      <DogGallery />
      <br />
      <RandomJoke />
    </div>
  );
}

export default App;

// @copyRights NajeemB all rights Reserved
