import React from "react";
import "./App.css";
import RocketLaunch from "./components/RocketLaunch";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    rockets: [],
    isLoading: false
  };

  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/launches";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({
      rockets: data,
      isLoading: true
    });
    console.log("rockets", this.state);
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading ? (
          <div className="App">
            <div className="container">
              <h3>Loading Data... Please wait...</h3>
            </div>
          </div>
        ) : (
          <div className="App">
            <Header />
            <RocketLaunch rockets={this.state.rockets} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
