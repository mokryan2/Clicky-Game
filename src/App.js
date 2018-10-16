import React, { Component } from 'react';
import './App.css';
import NAV from "./components/NAV";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import kirbys from "./kirbys.json"

class App extends Component {
  state = {
    message: "Select a Kirby to start!",
    highScore: 0,
    currentScore: 0,
    kirbys: kirbys,
    notPicked: kirbys
  }

  componentDidMount() { }

  randomArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectKirby = name => {
    const findKirby = this.state.notPicked.find(kirby => kirby.name === name);

    if (findKirby === undefined) {
      this.setState({
        message: "Try Again!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        kirbys: kirbys,
        notPicked: kirbys
      });
    }
    else {
      const newKirby = this.state.notPicked.filter(kirby => kirby.name !== name);
      this.setState({
        message: "Keep Going!",
        currentScore: this.state.currentScore + 1,
        kirbys: kirbys,
        notPicked: newKirby
      });
    }
    this.randomArray(kirbys);
  }

  render() {
    return (
      <Wrapper>
        <NAV
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Header />
        {this.state.kirbys.map(kirby => (
          <Card
            name={kirby.name}
            image={kirby.image}
            selectKirby={this.selectKirby}
            currentScore={this.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
