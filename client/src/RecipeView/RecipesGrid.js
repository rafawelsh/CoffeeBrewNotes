import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledGrid = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;
	padding: 2rem;
`;

const StyledItem = styled.li`
	background-color: #ff5455;
	border-radius: 10px;
`;

function RecipesGrid() {
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const getRecipeEntries = () => {
		axios
			.get("/api/recipes/")
			.then((res) => {
				setRecipeEntries(Object.values(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const { path, url } = useRouteMatch();
	// console.log("url", url);
	// console.log("path", path);

	return (
		<div>
			<h1>List of recipes</h1>

			<StyledGrid>
				{recipeEntries.map((recipe) => (
					<StyledItem key={recipe._id}>
						<p className='method'>Method: {recipe.brewMethod}</p>
						<p className='roaster'>Roaster: {recipe.roaster}</p>
						<p className='origin'>Origin: {recipe.coffeeOrigin}</p>
						<p className='variety'>Variety: {recipe.coffeeVariety}</p>
						<p className='variety'>ID: {recipe._id}</p>

						<Link to={`grid/${recipe._id}`}>Link</Link>
					</StyledItem>
				))}
			</StyledGrid>
		</div>
	);
}

export default RecipesGrid;
