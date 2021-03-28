import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledGrid, StyledItem, NavLink } from "../../styles/RecipeGridStyles";
import { PageContainer, PageWrapper } from "../../styles/PageStyles";
import CoffeeIcon from "../../images/coffee.png";

function RecipesGrid() {
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const getRecipeEntries = () => {
		axios({
			headers: { "auth-token": localStorage.getItem("token") },
			method: "GET",
			url: "/api/recipes",
		})
			.then((res) => {
				setRecipeEntries(Object.values(res.data));
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const formattedDate = (mongoDate) => {
		const date = new Date(mongoDate);
		let month = date.getMonth();
		let day = date.getDay();
		return (
			<>
				<p className='date'>
					Date: {month}/{day}
				</p>
			</>
		);
	};

	return (
		<PageContainer>
			<h1>List of recipes</h1>
			<StyledGrid>
				{recipeEntries.map((recipe) => (
					<StyledItem key={recipe._id}>
						<NavLink to={`grid/${recipe._id}`}>
							{/* <img src={CoffeeIcon} alt='icon' /> */}
							<div>
								<p className='method'>Method: {recipe.brewMethod}</p>
								<p className='roaster'>Roaster: {recipe.roaster}</p>
							</div>
							<div>
								<p className='origin'>Origin: {recipe.coffeeOrigin}</p>
								{formattedDate(recipe.created)}
							</div>
						</NavLink>
					</StyledItem>
				))}
			</StyledGrid>
		</PageContainer>
	);
}

export default RecipesGrid;
