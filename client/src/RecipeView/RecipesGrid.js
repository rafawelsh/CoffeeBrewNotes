import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeGridCard from "./RecipeGridCard";

const StyledGrid = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	padding: 2rem;
`;

const StyledItem = styled.li`
	background-color: #ff5455;
	border-radius: 10px;
`;

export default function RecipesGrid() {
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const getRecipeEntries = () => {
		axios
			.get("/api/recipes/")
			.then((res) => {
				console.log(...res.data);
				setRecipeEntries(Object.values(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>List of recipes</h1>
			<StyledGrid>
				{recipeEntries.map((recipe) => (
					<StyledItem key={recipe._id}>
						<RecipeGridCard recipe={recipe} />
					</StyledItem>
				))}
			</StyledGrid>
		</div>
	);
}
