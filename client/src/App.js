import React from "react";
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
	const loggedIn = localStorage.getItem("token");

	return (
		<Router>
			<GlobalStyle />
			<NavBar loggedIn={loggedIn} />

			<Switch>
				<Route exact path='/' component={Home} />
				<ProtectedRoute
					loggedIn={loggedIn}
					exact
					path='/new-recipe'
					component={CoffeeForm}
				/>
				<ProtectedRoute
					loggedIn={loggedIn}
					exact
					path='/grid'
					component={RecipesGrid}
				/>
				<Route exact path='/resources' component={Resources} />
				<Route exact path='/login' component={LoginForm} />
				<Route exact path='/register' component={RegisterForm} />
				<ProtectedRoute
					loggedIn={loggedIn}
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
