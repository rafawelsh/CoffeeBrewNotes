import React from "react";
import styled from "styled-components";

export default function RecipeEntry({ recipe }) {
	return (
		<div key={recipe._id} style={{ border: "2px black solid" }}>
			<p>{recipe.brewMethod}</p>
			<p>{recipe.coffeeVarietal}</p>
			<p>{recipe.tastingNotes}</p>
			<ul>
				{recipe.steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ul>
		</div>
	);
}
