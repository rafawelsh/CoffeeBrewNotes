import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/LoginForm";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
import RecipesGrid from "./components/RecipeView/RecipesGrid";
import RecipeGridCard from "./components/RecipeView/RecipeGridCard";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				{/* <GlobalStyle /> */}
				<NavBar />
			</div>

			<Switch>
				<Route exact path='/'>
					Home
				</Route>
				<Route exact path='/new-recipe' component={CoffeeForm} />
				<Route exact path='/grid' component={RecipesGrid} />
				<Route exact path='/login' component={LoginForm} />
				<Route
					path={`/grid/:id`}
					component={(props) => <RecipeGridCard {...props} />}
				/>
			</Switch>
		</Router>
	);
}

export default App;
