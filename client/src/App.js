import CoffeeForm from "./coffeeForm/CoffeeForm";
import RecipesGrid from "./RecipeView/RecipesGrid";
import RecipeGridCard from "./RecipeView/RecipeGridCard";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<GlobalStyle />
				<Link to='/'>Home</Link>
				<Link to='/new-recipe'>New Recipe</Link>
				<Link to='/grid'>Coffee Grid</Link>
			</div>

			<Switch>
				<Route exact path='/'>
					Home
				</Route>
				<Route exact path='/new-recipe' component={CoffeeForm} />

				<Route exact path='/grid' component={RecipesGrid} />
				<Route
					path={`/grid/:id`}
					component={(props) => <RecipeGridCard {...props} />}
				/>
			</Switch>
		</Router>
	);
}

export default App;
