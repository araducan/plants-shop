import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
