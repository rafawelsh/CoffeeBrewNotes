import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledGridCard = styled.div`
	/* width: 300px; */
	display: grid;
	/* grid-template-areas:
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
	} */
`;

function RecipeGridCard(props) {
	const [recipe, setRecipe] = useState([]);

	const { id } = props.match.params;

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = () => {
		axios({
			headers: { "auth-token": localStorage.getItem("token") },
			method: "GET",
			url: `/api/recipes/${id}`,
		})
			.then((res) => {
				setRecipe(res.data);
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const { brewMethod, roaster, coffeeOrigin, coffeeVariety, created } = recipe;

	const [month, day] = new Date(created).toLocaleDateString("en-US").split("/");

	return (
		<StyledGridCard>
			<p className='method'>Method: {brewMethod}</p>
			<p className='roaster'>Roaster: {roaster}</p>
			<p className='origin'>Origin: {coffeeOrigin}</p>
			<p className='variety'>Variety: {coffeeVariety}</p>
			<p className='variety'>
				Date: {month}/{day}
			</p>

			<Link to='/grid'>Back To Coffee Grid</Link>
		</StyledGridCard>
	);
}

export default RecipeGridCard;
