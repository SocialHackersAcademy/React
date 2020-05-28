import React, { useState } from 'react';
import './App.css';

import Guarantee from './CustomerService';
import Counter from "./Counter"

let hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];


function Hobby(props) {
  return <li>{props.name}</li>;
}

function HobbyList() {
  const [hobby, setHobby] = useState(hobbies);
  return <ul>{hobbies.map(item => {
    return <Hobby name={item} />
  })}</ul>
}

function App() {
  return (
    <div className="App">
      <h2>Hobbies</h2>
      <HobbyList />
      <h2>Customer Service</h2>
      <Guarantee />
      <h2>Counter Mini App</h2>
      <Counter />
    </div>
  );
}

export default App;