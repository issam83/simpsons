import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import Lamp from "./Lamp";
import Quotes from "./Quotes";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }

  handleClick = () => {
    this.setState({working: !this.state.working});
  };

  render() {

    const adn = this.state.working ? 'on' : 'off';

    let change = "App-logo";
  if (this.state.working) {
    change = ' App-logo2';
  
    
  }
    return (
      <div className="App">
      <div className="App-header" />
      <img src={logo} className = {change} alt="logo" />
      <button
      onClick={this.handleClick}
        className={adn}>{adn.toUpperCase()}
      </button>
      <Lamp on />
       <Lamp />
         <Quotes/>
           <Quote/>  
      </div>
    );
  }
}

export default App;
