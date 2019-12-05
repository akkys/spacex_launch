import React, { Component } from "react";
import LaunchHeader from "./LaunchHeader";

class LaunchDetails extends Component {
  state = {
    activeRocket: [],
    rocket: []
  };

  componentDidMount = async () => {
    const flight_number = this.props.location.state.rocket;
    const rocket_id = this.props.location.state.rocket_id;
    console.log("rocket_id", rocket_id);

    const req = await fetch(
      `https://api.spacexdata.com/v3/launches/${flight_number}`
    );
    const res = await req.json();

    const req1 = await fetch(
      `https://api.spacexdata.com/v3/rockets/${rocket_id}`
    );
    const res1 = await req1.json();

    this.setState({ activeRocket: res, rocket: res1 });
    console.log(this.state);
  };

  render() {
    console.log("props", this.props);
    const rockets = this.state.activeRocket;
    console.log("launch", rockets.mission_name);

    const rocket = this.state.rocket;
    console.log("rocket", rocket);

    return (
      <div className="App">
        <LaunchHeader />
        <div className="container">
          {this.state.activeRocket.length !== 0 && (
            <div>
              <h2 className="mission-title">
                Mission : <span>{rockets.mission_name}</span>
              </h2>
              <hr />
              <div>
                <h4>Launch Details</h4>
                <div>
                  <p className="p-container">
                    Flight Number : <span>{rockets.flight_number}</span>
                  </p>
                  <p className="p-container">
                    Launch Year : <span>{rockets.launch_year}</span>
                  </p>
                  <p className="p-container">
                    Launch Successful :{" "}
                    {!rockets.launch_success ? (
                      <span className="failure-label">No</span>
                    ) : (
                      <span className="success-label">Yes</span>
                    )}
                  </p>
                  <p className="p-container">
                    Launch Details :{" "}
                    {!rockets.details ? (
                      <span>Null</span>
                    ) : (
                      <span>{rockets.details}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          <br />
          <div>
            {this.state.rocket.length !== 0 && (
              <div>
                <h4>Rocket Details</h4>
                <div>
                  <p className="p-container">
                    Rocket ID : <span>{rocket.rocket_id}</span>
                  </p>
                  <p className="p-container">
                    Rocket Name : <span>{rocket.rocket_name}</span>
                  </p>
                  <p className="p-container">
                    Rocket Details : <span>{rocket.description}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchDetails;
