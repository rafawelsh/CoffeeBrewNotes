import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// import { useParams } from "react-router-dom";

const StyledGridCard = styled.div`
	/* background-color: blue; */
	/* width: 300px; */
	display: grid;
	grid-template-areas:
		"a b"
		"c d";

	.method {
		grid-area: "a";
	}
	.roaster {
		grid-area: "b";
	}
	.origin {
		grid-area: "c";
	}
	.variety {
		grid-area: "d";
	}
`;

function RecipeGridCard(props) {
	const [recipe, setRecipe] = useState([]);

	const { id } = props.match.params;

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = () => {
		axios
			.get(`/api/recipes/${id}`)
			.then((res) => {
				setRecipe(res.data);
				console.log(Object.values(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<StyledGridCard>
			{/* <h3>{recipeID}</h3> */}
			<p>Hello</p>
			<h1>This is where I want to get</h1>
			<p>Hello</p>
			<p className='method'>Method: {recipe.brewMethod}</p>
			<p className='roaster'>Roaster: {recipe.roaster}</p>
			<p className='origin'>Origin: {recipe.coffeeOrigin}</p>
			<p className='variety'>Variety: {recipe.coffeeVariety}</p>
			<p className='variety'>ID: {recipe._id}</p>
		</StyledGridCard>
	);
}

export default RecipeGridCard;
