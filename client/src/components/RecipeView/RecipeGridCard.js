import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardStepsView from "./CardStepsView";
import FormattedDateView from "./FormattedDateView";
import FormattedRatioView from "./FormattedRatioView";
import { PageWrapper } from "../../styles/PageStyles";
import {
	StyledGridCard,
	RecipeSections,
	RecipeSection,
} from "../../styles/RecipeGridCardStyles";

function RecipeGridCard(props) {
	const [recipe, setRecipe] = useState({});

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
		grind,
	} = recipe;

	return (
		<PageWrapper>
			<StyledGridCard>
				<RecipeSections>
					<RecipeSection>
						<h3>Coffee Information</h3>
						<FormattedDateView created={created} />
						<p className='origin'>Origin: {coffeeName}</p>
						<p className='roaster'>Roaster: {roaster}</p>
						<p className='variety'>Variety: {coffeeVariety}</p>
						<p className='process'>Process: {process}</p>
						<p className='method'>Method: {brewMethod}</p>
					</RecipeSection>
					<RecipeSection>
						<h3>Recipe Information</h3>
						<p className='grind'>Grind Setting: {grind}</p>
						<p className='water'>Water: {waterAmount} g</p>
						<p className='coffee'>Coffee: {coffeeAmount} g</p>
						<FormattedRatioView water={waterAmount} coffee={coffeeAmount} />
					</RecipeSection>
					<RecipeSection>
						<CardStepsView steps={steps} />
						<p className='tastingNotes'>Notes: {tastingNotes}</p>
					</RecipeSection>
				</RecipeSections>
				<Link to='/grid'>Back To Coffee Grid</Link>
			</StyledGridCard>
		</PageWrapper>
	);
}

export default RecipeGridCard;
