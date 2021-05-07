import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardStepsView from "./CardStepsView";
import FormattedDateView from "./FormattedDateView";
import FormattedRatioView from "./FormattedRatioView";
import { RecipeGridCardWrapper } from "../../styles/PageStyles";
import {
	StyledGridCard,
	RecipeSections,
	RecipeSection,
} from "../../styles/RecipeGridCardStyles";

function processRecipe(recipe) {
	const section1 = [];
	const section2 = [];
	const section3 = [];

	const {
		brewMethod,
		coffeeName,
		roaster,
		region,
		process,
		waterAmount,
		coffeeAmount,
		tastingNotes,
		grind,
	} = recipe;

	if (coffeeName) {
		section1.push(`Coffee: ${coffeeName}`);
	}
	if (roaster) {
		section1.push(`Roaster: ${roaster}`);
	}
	if (region) {
		section1.push(`Variety: ${region}`);
	}
	if (process) {
		section1.push(`Process: ${process}`);
	}
	if (brewMethod) {
		section1.push(`Method: ${brewMethod}`);
	}
	if (grind) {
		section2.push(`Grind: ${grind}`);
	}
	if (waterAmount) {
		section2.push(`Water: ${waterAmount}`);
	}
	if (coffeeAmount) {
		section2.push(`Coffee: ${coffeeAmount}`);
	}
	if (tastingNotes) {
		section3.push(`Notes: ${tastingNotes}`);
	}

	return { section1, section2, section3 };
}

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

	const { created, waterAmount, coffeeAmount, steps } = recipe;

	const { section1, section2, section3 } = processRecipe(recipe);

	return (
		<RecipeGridCardWrapper>
			<StyledGridCard>
				<RecipeSections>
					<RecipeSection>
						<h2>Coffee Information</h2>
						<FormattedDateView created={created} />
						{section1.map((text) => (
							<p key={text}>{text}</p>
						))}
					</RecipeSection>
					<RecipeSection>
						<h2>Recipe Information</h2>
						{section2.map((text) => (
							<p key={text}>{text}</p>
						))}
						<FormattedRatioView water={waterAmount} coffee={coffeeAmount} />
					</RecipeSection>
					<RecipeSection>
						<CardStepsView steps={steps} />
						{section3.map((text) => (
							<p key={text}>{text}</p>
						))}
					</RecipeSection>
				</RecipeSections>
				<Link to='/grid'>Back To Coffee Grid</Link>
			</StyledGridCard>
		</RecipeGridCardWrapper>
	);
}

export default RecipeGridCard;
