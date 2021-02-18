import React from "react";
import axios from "axios";
import { Formik, Field, Form, FieldArray } from "formik";
import styled from "styled-components";

const StyledForm = styled.div`
	.form {
		display: flex;
		flex-direction: column;
		width: 350px;
	}
`;

function RecipeForm() {
	const initialValues = {
		brewMethod: "",
		coffeeName: "",
		roaster: "",
		coffeeVariety: "",
		process: "",
		waterAmount: "",
		coffeeAmount: "",
		steps: [""],
		tastingNotes: "",
	};

	const handleOnSubmit = (values, actions) => {
		axios({
			method: "POST",
			url: "/api/recipes",
			data: values,
		})
			.then((response) => {
				actions.setSubmitting(false);
				actions.resetForm();
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<StyledForm>
			<h1>Add a New Recipe</h1>
			<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
				{({ values }) => (
					<Form className='form'>
						<label htmlFor='coffeeName'>Origin/Name </label>
						<Field
							id='coffeeName'
							name='coffeeName'
							placeholder='Origin or Name'
						/>
						<label htmlFor='roaster'>Roaster </label>
						<Field id='roaster' name='roaster' placeholder='Roaster' />
						<label htmlFor='coffeeVariety'>Variety </label>
						<Field
							id='coffeeVariety'
							name='coffeeVariety'
							placeholder='Variety'
						/>
						<label htmlFor='process'>Process </label>
						<Field
							id='process'
							name='process'
							as='select'
							placeholder='Process'
						>
							<option value='natural'>Natural</option>
							<option value='Washed'>Washed</option>
							<option value='honey'>Honey</option>
							<option value='anaerobic'>Anaerobic</option>
						</Field>
						<label htmlFor='brewMethod'>Brew Method </label>
						<Field
							id='brewMethod'
							name='brewMethod'
							as='select'
							placeholder='Method'
						>
							<option value='Drip'>Drip</option>
							<option value='Espresso'>Espresso</option>
							<option value='Honey'>Pour Over</option>
							<option value='French Press'>French Press</option>
							<option value='Aeropress'>Aeropress</option>
							<option value='Chemex'>Chemex</option>
							<option value='Siphon'>Siphon</option>
							<option value='Other'>Other</option>
						</Field>
						<label htmlFor='waterAmount'>Amount of Water (g)</label>
						<Field
							id='waterAmount'
							name='waterAmount'
							placeholder='Water Amount'
						/>
						<label htmlFor='coffeeAmount'>Amount of Coffee (g)</label>
						<Field
							id='coffeeAmount'
							name='coffeeAmount'
							placeholder='Coffee Amount'
						/>

						<FieldArray name='steps'>
							{({ insert, remove, push }) => (
								<div>
									{values.steps.length > 0 &&
										values.steps.map((step, index) => (
											<div
												className='row'
												key={index}
												style={{
													display: "flex",
													width: "fit-content",
													margin: "0 auto",
												}}
											>
												<div className='col'>
													<label htmlFor={`steps.${index}`}>
														Step {index + 1}
													</label>
													<Field
														name={`steps.${index}`}
														placeholder='Add a step'
														type='text'
													/>
												</div>
												<div className='col'>
													<button
														type='button'
														className='secondary'
														onClick={() => remove(index)}
													>
														X
													</button>
												</div>
											</div>
										))}
									<button
										type='button'
										className='secondary'
										onClick={() => push("")}
									>
										Add a Step
									</button>
								</div>
							)}
						</FieldArray>
						<label htmlFor='tastingNotes'>Notes</label>
						<Field
							id='tastingNotes'
							name='tastingNotes'
							placeholder='Varietal'
							as='textarea'
						/>
						<button type='submit'>Enter Recipe</button>
					</Form>
				)}
			</Formik>
		</StyledForm>
	);
}
export default RecipeForm;
