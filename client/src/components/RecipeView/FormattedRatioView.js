import React from "react";

function FormattedRatioView({ water, coffee }) {
	if (!water || !coffee) return null;
	let coffeeRatio = (water / coffee).toFixed(2);
	return <p>Ratio: {coffeeRatio} : 1</p>;
}

export default FormattedRatioView;
