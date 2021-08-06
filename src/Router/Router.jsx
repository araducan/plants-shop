import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
