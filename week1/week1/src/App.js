import React, { useState } from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
