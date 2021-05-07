import React from "react";

const CardStepsView = ({ steps }) => {
	if (!steps) return null;
	return (
		<>
			<h2>Brewing Instructions</h2>
			<ol>
				{steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</>
	);
};

export default CardStepsView;
