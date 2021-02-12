import React from "react";

export default function RecipeCard({ recipe }) {
	const {
		brewMethod,
		coffeeOrigin,
		roaster,
		coffeeVariety,
		process,
		steps,
		tastingNotes,
	} = recipe;
	return (
		<div>
			<h1>{brewMethod}</h1>
			<h3>{coffeeVariety}</h3>
		</div>
	);
}
