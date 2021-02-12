import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
const StyledGridCard = styled.div`
	background-color: blue;
	/* width: 300px; */
	display: grid;
	grid-template-areas:
		"a b"
		"c d";

	&:hover {
		transform: scale(1.1);
	}

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

export default function RecipeGridCard({ recipe }) {
	const {
		brewMethod,
		coffeeOrigin,
		roaster,
		coffeeVariety,
		process,
		steps,
		tastingNotes,
	} = recipe;
	const handleClick = (id) => {
		<RecipeCard recipe={recipe} />;
		console.log(roaster);
	};

	// const formattedDate = (date) => {
	// 	return date.getDate();
	// };
	return (
		<StyledGridCard key={recipe._id} onClick={handleClick}>
			<p className='method'>Method: {brewMethod}</p>
			<p className='roaster'>Roaster: {roaster}</p>
			<p className='origin'>Origin: {coffeeOrigin}</p>
			<p className='variety'>Variety: {coffeeVariety}</p>
			{/* <p className='date'>Variety: {formattedDate(date)}</p> */}
			{/* <p>Process: {recipe.process}</p>
			<ol>
				{recipe.steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
			<p>
				Tasting Notes:
				{recipe.tastingNotes}
			</p> */}
		</StyledGridCard>
	);
}
