import React from "react";

const CardStepsView = ({ steps }) => {
	if (!steps) return null;
	return (
		<>
			<h3>Brewing Instructions</h3>
			<ol>
				{steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</>
	);
};

export default CardStepsView;
