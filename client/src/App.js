import "./App.css";
import CoffeeForm from "./coffeeForm/CoffeeForm";
import Recipes from "./Recipes";
import GlobalStyle from "./globalStyles";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Recipes />
			<CoffeeForm />
		</div>
	);
}

export default App;
