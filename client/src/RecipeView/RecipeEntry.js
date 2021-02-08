import React from "react";
import styled from "styled-components";

export default function RecipeEntry({ recipe }) {
	return (
		<div key={recipe._id}>
			<p>{recipe.brewMethod}</p>
			<p>{recipe.roaster}</p>
			<p>{recipe.coffeeOrigin}</p>
			<p>{recipe.coffeeVarietal}</p>
			<p>{recipe.tastingNotes}</p>
			<ol>
				{recipe.steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</div>
	);
}
