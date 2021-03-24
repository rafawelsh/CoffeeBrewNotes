import React from "react";
import axios from "axios";
import { Formik, FieldArray } from "formik";
import styled from "styled-components";
import {
	Form,
	FormWrapper,
	FormGroup,
	Input,
	Label,
	Button,
	AddStepButton,
} from "../../styles/FormStyles";

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
			headers: { "auth-token": localStorage.getItem("token") },
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
		<FormWrapper>
			<h1>Add a New Recipe</h1>
			<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
				{({ values }) => (
					<Form className='form'>
						<Label htmlFor='coffeeName'>Origin/Name </Label>
						<Input
							id='coffeeName'
							name='coffeeName'
							placeholder='Origin or Name'
						/>
						<Label htmlFor='roaster'>Roaster </Label>
						<Input id='roaster' name='roaster' placeholder='Roaster' />
						<Label htmlFor='coffeeVariety'>Variety </Label>
						<Input
							id='coffeeVariety'
							name='coffeeVariety'
							placeholder='Variety'
						/>
						<Label htmlFor='process'>Process </Label>
						<Input
							id='process'
							name='process'
							as='select'
							placeholder='Process'
						>
							<option value='natural'>Natural</option>
							<option value='Washed'>Washed</option>
							<option value='honey'>Honey</option>
							<option value='anaerobic'>Anaerobic</option>
						</Input>
						<Label htmlFor='brewMethod'>Brew Method </Label>
						<Input
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
						</Input>
						<Label htmlFor='waterAmount'>Amount of Water (g)</Label>
						<Input
							id='waterAmount'
							name='waterAmount'
							placeholder='Water Amount'
						/>
						<Label htmlFor='coffeeAmount'>Amount of Coffee (g)</Label>
						<Input
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
													<Label htmlFor={`steps.${index}`}>
														Step {index + 1}
													</Label>
													<Input
														name={`steps.${index}`}
														placeholder='Add a step'
														type='text'
													/>
												</div>
												<div className='col'>
													<Button
														type='Button'
														className='secondary'
														onClick={() => remove(index)}
													>
														X
													</Button>
												</div>
											</div>
										))}
									<AddStepButton
										type='Button'
										className='secondary'
										onClick={() => push("")}
									>
										Add a Step
									</AddStepButton>
								</div>
							)}
						</FieldArray>
						<Label htmlFor='tastingNotes'>Notes</Label>
						<Input
							id='tastingNotes'
							name='tastingNotes'
							placeholder='Varietal'
							as='textarea'
						/>
						<Button type='submit'>Enter Recipe</Button>
					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
}
export default RecipeForm;
