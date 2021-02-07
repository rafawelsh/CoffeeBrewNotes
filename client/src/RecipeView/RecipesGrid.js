import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeEntry from "./RecipeEntry";

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
			<ul>
				{recipeEntries.map((recipe) => (
					<li key={recipe._id}>
						<RecipeEntry recipe={recipe} />
					</li>
				))}
			</ul>
		</div>
	);
}
