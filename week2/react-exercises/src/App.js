import React from 'react';
import './App.css'

import Friend from "./Components/NewFriend"
import DogGallery from './Components/Dogs'
import RandomJoke from './Components/RandomJoke'


function App() {

  return (
    <div>
      <h1>Exercise 1</h1>
      <Friend />
      <h1>Exercise 2 </h1>
      <DogGallery />
      <h1>Exercise 3</h1>
      <RandomJoke />

    </div>


  )
}

export default App;
