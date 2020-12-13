import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";
import User from "./component/user/user";
import Dashboard from "./component/dashboard/dashboard";
import CreateCultivation from "./component/cultivation/createCultivation";
import Creating from "./component/cultivation/Creating";
import CultivationEdit from "./component/cultivation/cultivationEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/dashboard/create-cultivation"
            component={CreateCultivation}
          />
          <Route path="/dashboard/details/:id" component={User} />
          <Route
            path="/dashboard/cultivation/edit/:id"
            component={CultivationEdit}
          />
          {/* <Route path="/dashboard/creating" component={Creating} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
