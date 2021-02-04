import React, { useState, Fragment } from "react";

function CoffeeForm() {
	const [formState, setFormState] = useState({
		brewMethod: "",
		roaster: "",
		coffeeOrigin: "",
		coffeeVarietal: "",
		tastingNotes: "",
	});

	//adds new values to form inputs
	const handleChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	const newStep = {};
	const [stepState, setStepState] = useState([{ ...newStep }]);

	//adds steps to stepItem state w/i formState
	const addStep = () => {
		setStepState([...stepState, { ...newStep }]);
	};

	//adding arr of steps seperate from formState
	const handleStepsChange = ({ target }) => {
		const { dataset, className, value } = target;
		const updatedSteps = [...stepState];
		updatedSteps[dataset.idx][className] = value;
		setStepState(updatedSteps);
	};

	//handle submit of total form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ ...formState, stepState });
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: "flex",
				flexDirection: "column",
				width: "400px",
				margin: "0 auto",
			}}
		>
			<label>
				Brew Method:
				<input
					type='text'
					name='brewMethod'
					value={formState.brewMethod}
					onChange={handleChange}
				/>
			</label>
			<label>
				Roaster:
				<input
					type='text'
					name='roaster'
					value={formState.roaster}
					onChange={handleChange}
				/>
			</label>
			<label>
				Origin:
				<input
					type='text'
					name='coffeeOrigin'
					value={formState.coffeeOrigin}
					onChange={handleChange}
				/>
			</label>
			<label>
				Varietal:
				<input
					type='text'
					name='coffeeVarietal'
					value={formState.coffeeVarietal}
					onChange={handleChange}
				/>
			</label>

			<label>Brewing Steps</label>
			{stepState.map((val, idx) => {
				const stepId = `step-${idx}`;
				return (
					<Fragment key={`step-${idx}`}>
						<label htmlFor={stepId}>{`Step #${idx + 1}`}:</label>
						<input
							type='text'
							name={stepId}
							data-idx={idx}
							id={stepId}
							className='steps'
							value={stepState[idx].name}
							onChange={handleStepsChange}
						/>
					</Fragment>
				);
			})}
			<input type='button' value='Add Step' onClick={addStep} />

			<label>
				Notes:
				<textarea
					type='text'
					name='tastingNotes'
					value={formState.tastingNotes}
					onChange={handleChange}
				/>
			</label>
			<input type='submit' value='Submit' />
		</form>
	);
}

export default CoffeeForm;
