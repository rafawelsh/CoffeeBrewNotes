import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
import RecipesGrid from "./components/RecipeView/RecipesGrid";
import RecipeGridCard from "./components/RecipeView/RecipeGridCard";
import Sidebar from "./components/NavBar/Sidebar";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
	const loggedIn = localStorage.getItem("token");

	return (
		<Router>
			<GlobalStyle />
			<NavBar loggedIn={loggedIn} />

			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/new-recipe' component={CoffeeForm} />
				<Route exact path='/grid' component={RecipesGrid} />
				<Route exact path='/login' component={LoginForm} />
				<Route exact path='/register' component={RegisterForm} />
				<Route
					path={`/grid/:id`}
					component={(props) => <RecipeGridCard {...props} />}
				/>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
