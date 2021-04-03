import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledGridCard } from "../../styles/RecipeGridCardStyles";

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

	const {
		brewMethod,
		coffeeName,
		roaster,
		coffeeVariety,
		process,
		waterAmount,
		coffeeAmount,
		steps,
		tastingNotes,
		created,
	} = recipe;

	const [month, day] = new Date(created).toLocaleDateString("en-US").split("/");

	return (
		<StyledGridCard>
			<p className='method'>Method: {brewMethod}</p>
			<p className='roaster'>Roaster: {roaster}</p>
			<p className='origin'>Origin: {coffeeName}</p>
			<p className='variety'>Variety: {coffeeVariety}</p>
			<p className='variety'>
				Date: {month}/{day}
			</p>

			<Link to='/grid'>Back To Coffee Grid</Link>
		</StyledGridCard>
	);
}

export default RecipeGridCard;
