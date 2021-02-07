import "./App.css";
import CoffeeForm from "./coffeeForm/CoffeeForm";
import RecipesGrid from "./RecipeView/RecipesGrid";
import GlobalStyle from "./globalStyles";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<RecipesGrid />
			<CoffeeForm />
		</div>
	);
}

export default App;
