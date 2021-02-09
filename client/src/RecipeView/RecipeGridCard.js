import React from "react";

export default function RecipeCard({ recipe }) {
	return (
		<div key={recipe._id}>
			<p>Method: {recipe.brewMethod}</p>
			<p>Roaster: {recipe.roaster}</p>
			<p>Origin: {recipe.coffeeOrigin}</p>
			<p>Variety: {recipe.coffeeVariety}</p>
			<p>Process: {recipe.process}</p>
			<ol>
				{recipe.steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
			<p>
				Tasting Notes:
				{recipe.tastingNotes}
			</p>
		</div>
	);
}
