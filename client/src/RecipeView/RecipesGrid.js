import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeEntry from "./RecipeEntry";

const StyledGrid = styled.ul`
	list-style-type: none;
	display: flex;
	padding: 0 auto;
`;

const StyledItem = styled.li`
	border: 1px solid black;
	width: 500px;
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
						<RecipeEntry recipe={recipe} />
					</StyledItem>
				))}
			</StyledGrid>
		</div>
	);
}
