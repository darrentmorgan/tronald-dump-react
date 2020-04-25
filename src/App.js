import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = { quote: "" };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get("https://www.tronalddump.io/random/quote")
      .then((response) => {
        const { value } = response.data;
        this.setState({
          quote: value,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { quote } = this.state;
    return (
      <div className="App">
        <div className="card">
          <h1 className="heading">{quote}</h1>
          <button className="button">
            <span onClick={this.fetchQuote}>GIVE ME YOUR PASSION!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
