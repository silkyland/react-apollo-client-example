import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./components/admin/User";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
