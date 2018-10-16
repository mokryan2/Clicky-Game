import React, { Component } from 'react';
import './App.css';
import NAV from "./components/NAV";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import kirbys from "./kirbys.json"

class App extends Component {
state ={
  message: "Select a Kirby to start!",
  highScore: 0,
  currentScore: 0,
  kirbys: kirbys,
  notPicked: kirbys
}


  render() {
    return (
   <Wrapper>
     <NAV 
      message={this.state.message}
      currentScore={this.state.currentScore}
      highScore={this.state.highScore}
     />
     <Header/>

     </Wrapper>
    );
  }
}

export default App;
