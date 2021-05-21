import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/jwtContext";
import axios from "axios";
import FormattedDateView from "./FormattedDateView";
import FormattedRatioView from "./FormattedRatioView";
import { StyledGrid, StyledItem, NavLink } from "../../styles/RecipeGridStyles";
import { RecipeGridWrapper } from "../../styles/PageStyles";
import CoffeeIcon from "../../images/coffee.png";

function RecipesGrid() {
	const [authState] = useContext(AuthContext);
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const getRecipeEntries = () => {
		axios({
			headers: { "auth-token": authState },
			method: "GET",
			url: "https://coffee-journal-app.herokuapp.com/api/recipes/",
		})
			.then((res) => {
				setRecipeEntries(Object.values(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<RecipeGridWrapper>
			<h1>List of recipes</h1>
			{recipeEntries.length === 0 ? (
				<>
					<h2>Add Your First Recipe!</h2>
					<h2>Hit the "Add Recipe Button"</h2>
				</>
			) : (
				<StyledGrid>
					{recipeEntries.map((recipe) => (
						<StyledItem key={recipe._id}>
							<NavLink to={`grid/${recipe._id}`}>
								<img src={CoffeeIcon} alt='icon' />
								<div>
									<p className='roaster'>Roaster: {recipe.roaster}</p>
									<p className='coffeename'>Name: {recipe.coffeeName}</p>
									<FormattedRatioView
										water={recipe.waterAmount}
										coffee={recipe.coffeeAmount}
									/>
									<FormattedDateView created={recipe.created} />
								</div>
							</NavLink>
						</StyledItem>
					))}
				</StyledGrid>
			)}
		</RecipeGridWrapper>
	);
}

export default RecipesGrid;
