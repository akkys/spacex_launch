import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import LaunchDetails from "./components/LaunchDetails";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/launchDetails/:flight_number" component={LaunchDetails} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
