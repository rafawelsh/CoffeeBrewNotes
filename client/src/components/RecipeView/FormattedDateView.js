import React from "react";

function FormattedDateView({ created }) {
	if (!created) return null;
	const date = new Date(created);
	let month = date.getMonth() + 1;
	let day = date.getDay();
	return (
		<p className='date'>
			Date: {month}/{day}
		</p>
	);
}

export default FormattedDateView;
