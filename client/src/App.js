import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
import RecipesGrid from "./components/RecipeView/RecipesGrid";
import RecipeGridCard from "./components/RecipeView/RecipeGridCard";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	// const loggedIn = localStorage.getItem("token");

	return (
		<Router>
			<div>
				<GlobalStyle />
				<NavBar />
			</div>

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
		</Router>
	);
}

export default App;
