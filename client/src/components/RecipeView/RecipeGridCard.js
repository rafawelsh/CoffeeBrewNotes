import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledGridCard } from "../../styles/RecipeGridCardStyles";

function RecipeGridCard(props) {
	const [recipe, setRecipe] = useState([]);

	const { id } = props.match.params;

	useEffect(() => {
		getRecipes();
	});

	const getRecipes = () => {
		axios({
			headers: { "auth-token": localStorage.getItem("token") },
			method: "GET",
			url: `/api/recipes/${id}`,
		})
			.then((res) => {
				setRecipe(res.data);
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

	const formattedDate = (mongoDate) => {
		const date = new Date(mongoDate);
		let month = date.getMonth() + 1;
		let day = date.getDay();
		return (
			<>
				<p className='date'>
					Date: {month}/{day}
				</p>
			</>
		);
	};

	const formattedRatio = (water, coffee) => {
		let coffeeRatio = (water / coffee).toFixed(2);
		return <p>Ratio: {coffeeRatio} : 1</p>;
	};

	return (
		<StyledGridCard>
			{formattedDate(created)}
			<p className='origin'>Origin: {coffeeName}</p>
			<p className='roaster'>Roaster: {roaster}</p>
			<p className='variety'>Variety: {coffeeVariety}</p>
			<p className='process'>Process: {process}</p>
			<p className='method'>Method: {brewMethod}</p>
			<div>
				<h3>Water to CoffeeRatio</h3>
				<p className='water'>Water: {waterAmount}</p>
				<p className='coffee'>Coffee: {coffeeAmount}</p>
				{formattedRatio(waterAmount, coffeeAmount)}
			</div>
			{/* {steps.map((step) => (
				<ol key={step}>
					<li>{step}</li>
				</ol>
			))} */}
			{steps}
			<p className='tastingNotes'>Notes: {tastingNotes}</p>

			<Link to='/grid'>Back To Coffee Grid</Link>
		</StyledGridCard>
	);
}

export default RecipeGridCard;
