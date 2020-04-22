import React, { useState } from 'react';
import './App.css';
import CustomerService from "./CustomerService";


const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];


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
      <HobbyList />
      <h2>Customer Service</h2>
      <CustomerService />
    </div>
  );
}

export default App;