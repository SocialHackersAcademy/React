import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]
const elements = []


class Hobbies extends React.Component {
  render() {
    return (<li>{this.props.hobby}</li>)
  }
}

class HobbyList extends React.Component {
  constructor() {
    super()
    this.state = hobbies
    this.state = elements
  }
  render() {
    hobbies.map((value, index) => {
      elements.push(<Hobbies hobby={value} />)
    })
    return (
     <ul>
       {elements}
     </ul>
    )
  }
}

class Guarrantee extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <img src={this.props.img} />
      </div>
    )
  }
}
// counter exercise
let count = 0
let feedback = "sample text"
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, feedback: "Start counting"}

    // This binding is necessary to make `this` work in the callback
    this.setCount = this.setCount.bind(this)
  }

  setCount = () => {
    this.setState({ count: (count++), feedback: (count > 10) ? "It's higher than 10!" : "Keep counting..."});
  }

  render() {
    return (
      <div>
         <Button onClick={this.setCount} />
         <Count text={this.state.feedback} />
      </div>
    )
  }
}
class Count extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h4>
         {this.props.text}
      </h4>
    )
  }

}
class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button onClick={this.props.onClick}>Add 1!</button>
    )
  }
}







ReactDOM.render(
  <>
  <HobbyList />
  <Guarrantee title="Free shipping" description="this is all our description" img="/f-delivery.png" />
  <Guarrantee title="Customer support 24/7" description="this is all our description" img="/chat.png" />
  <Guarrantee title="Money Back Guarrantee" description="this is all our description" img="/coin.png" />
  <Counter />
  </>, document.querySelector("#root")
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
