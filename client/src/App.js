import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import Resources from "./components/Resources/Resources";
import LoginForm from "./components/UserForms/LoginForm";
import RegisterForm from "./components/UserForms/RegisterForm";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
import RecipesGrid from "./components/RecipeView/RecipesGrid";
import RecipeGridCard from "./components/RecipeView/RecipeGridCard";
import NotFound from "./components/NotFound";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
	const [login, setLogin] = useState(localStorage.getItem("token"));

	// const loggedIn = localStorage.getItem("token");
	console.log(login);
	return (
		<Router>
			<GlobalStyle />
			<NavBar loggedIn={login} />

			<Switch>
				<Route exact path='/' component={Home} />
				<ProtectedRoute
					loggedIn={login}
					exact
					path='/new-recipe'
					component={CoffeeForm}
				/>
				<ProtectedRoute
					loggedIn={login}
					exact
					path='/grid'
					component={RecipesGrid}
				/>
				<Route exact path='/resources' component={Resources} />
				<Route
					exact
					path='/login'
					component={LoginForm}
					login={login}
					setLoggedIn={setLogin}
				/>
				<Route exact path='/register' component={RegisterForm} />
				<ProtectedRoute
					loggedIn={login}
					path={`/grid/:id`}
					component={(props) => <RecipeGridCard {...props} />}
				/>
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
