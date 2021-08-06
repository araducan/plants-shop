import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const Router = () => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/shopping-cart" component={ShoppingCart} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
