import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, FieldArray } from "formik";

function RecipeForm() {
	const initialValues = {
		brewMethod: "",
		roaster: "",
		coffeeOrigin: "",
		coffeeVarietal: "",
		tastingNotes: "",
		steps: [""],
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
				console.log(values);
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<div>
			<h1>Add a New Recipe</h1>
			<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
				{({ values }) => (
					<Form
						style={{
							display: "flex",
							width: "400px",
							flexDirection: "column",
							margin: "0 auto",
						}}
					>
						<label htmlFor='brewMethod'>Brew Method </label>
						<Field id='brewMethod' name='brewMethod' placeholder='Method' />
						<label htmlFor='roaster'>Roaster </label>
						<Field id='roaster' name='roaster' placeholder='Roaster' />
						<label htmlFor='coffeeOrigin'>Origin </label>
						<Field id='coffeeOrigin' name='coffeeOrigin' placeholder='Origin' />
						handleOnSubmit
						<label htmlFor='coffeeVarietal'>Varietal</label>
						<Field
							id='coffeeVarietal'
							name='coffeeVarietal'
							placeholder='Varietal'
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
													<label htmlFor={`steps.${index}.step`}>
														Step {index + 1}
													</label>
													<Field
														name={`steps.${index}.step`}
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
		</div>
	);
}
export default RecipeForm;
