import React, { useState, useEffect } from "react";
import axios from "axios";
import FormattedDateView from "./FormattedDateView";
import FormattedRatioView from "./FormattedRatioView";
import { StyledGrid, StyledItem, NavLink } from "../../styles/RecipeGridStyles";
import { RecipeGridWrapper } from "../../styles/PageStyles";
import CoffeeIcon from "../../images/coffee.png";

function RecipesGrid() {
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const { REACT_APP_DEV_DB_RECIPE } = process.env;

	const getRecipeEntries = () => {
		axios({
			headers: { "auth-token": localStorage.getItem("token") },
			method: "GET",
			url: { REACT_APP_DEV_DB_RECIPE },
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
		</RecipeGridWrapper>
	);
}

export default RecipesGrid;
