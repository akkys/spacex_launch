import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const RocketLaunch = props => {
  return (
    <div className="container">
      {props.rockets.map(rocket => {
        return (
          <div key={rocket.flight_number}>
            <div className="card" id="card-container">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-10">
                    <label className="mission-label">
                      Mission :
                      {!rocket.launch_success ? (
                        <span className="failure-label">
                          {rocket.mission_name}
                        </span>
                      ) : (
                        <span className="success-label">
                          {rocket.mission_name}
                        </span>
                      )}
                    </label>
                    <br />
                    <label className="date-label">
                      Date :
                      <span className="date-details">
                        <Moment format="YYYY-MM-DD HH:mm">
                          {rocket.launch_date_local}
                        </Moment>
                      </span>
                    </label>
                  </div>
                  <div className="col-sm-1">
                    <button
                      className="btn btn-secondary btn-md"
                      id="launch-btn"
                    >
                      <Link
                        to={{
                          pathname: `/launchDetails/:${rocket.flight_number}`,
                          state: {
                            rocket: rocket.flight_number,
                            rocket_id: rocket.rocket.rocket_id
                          }
                        }}
                      >
                        Launch Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RocketLaunch;
