import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Formik, Form, FieldArray, Field } from "formik";
import { PageContainer } from "../../styles/PageStyles";
import {
	RecipeFormContainer,
	FormWrapper,
	FormSection,
	Input,
	Label,
	Steps,
	Button,
	AddStepButton,
	FormSections,
	TextArea,
} from "../../styles/FormStyles";

function RecipeForm() {
	const [redirect, setRedirect] = useState(false);

	const initialValues = {
		brewMethod: "",
		coffeeName: "",
		roaster: "",
		coffeeVariety: "",
		process: "",
		grindSize: "",
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
				console.log(values);
				actions.setSubmitting(false);
				actions.resetForm();
				setRedirect(true);
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<PageContainer>
			{redirect ? (
				<Redirect push to='/grid' />
			) : (
				<RecipeFormContainer>
					<FormWrapper>
						<h1 style={{ textAlign: "center" }}>Add a New Recipe</h1>
						<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
							{({ values }) => (
								<Form className='form'>
									<FormSections>
										<FormSection>
											<Label htmlFor='coffeeName'>Origin/Name</Label>
											<Input
												id='coffeeName'
												name='coffeeName'
												placeholder='Origin or Name'
											/>
											<Label htmlFor='roaster'>Roaster</Label>
											<Input
												id='roaster'
												name='roaster'
												placeholder='Roaster'
											/>
											<Label htmlFor='coffeeVariety'>Variety </Label>
											<Input
												id='coffeeVariety'
												name='coffeeVariety'
												placeholder='Variety'
											/>
											<Label htmlFor='process'>Process</Label>
											<Field
												as='select'
												id='process'
												name='process'
												placeholder='Process'
											>
												<option defaultValue></option>
												<option value='natural'>Natural</option>
												<option value='washed'>Washed</option>
												<option value='honey'>Honey</option>
												<option value='anaerobic'>Anaerobic</option>
											</Field>
										</FormSection>
										<FormSection>
											<Label htmlFor='brewMethod'>Brew Method</Label>
											<Field
												as='select'
												id='brewMethod'
												name='brewMethod'
												placeholder='Method'
											>
												<option defaultValue></option>
												<option value='drip'>Drip</option>
												<option value='espresso'>Espresso</option>
												<option value='honey'>Pour Over</option>
												<option value='frenchpress'>French Press</option>
												<option value='aeropress'>Aeropress</option>
												<option value='chemex'>Chemex</option>
												<option value='siphon'>Siphon</option>
												<option value='phin'>Phin</option>
												<option value='other'>Other</option>
											</Field>
											<Label htmlFor='grindSize'>Grind Size</Label>
											<Input
												id='grindSize'
												name='grindSize'
												placeholder='Grind Setting'
											/>
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
										</FormSection>
										<FormSection>
											<FieldArray name='steps'>
												{({ insert, remove, push }) => (
													<div>
														{values.steps.length > 0 &&
															values.steps.map((step, index) => (
																<div
																	className='row'
																	key={index}
																	style={{
																		margin: "1rem auto",
																	}}
																>
																	<div className='col'>
																		<Label htmlFor={`steps.${index}`}>
																			Step {index + 1}
																		</Label>
																		<Steps>
																			<Input
																				name={`steps.${index}`}
																				placeholder='Add a step'
																				type='text'
																				style={{
																					margin: "0 auto",
																				}}
																			/>
																			<Button
																				type='Button'
																				className='secondary'
																				onClick={() => remove(index)}
																			>
																				X
																			</Button>
																		</Steps>
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
											<TextArea
												id='tastingNotes'
												name='tastingNotes'
												placeholder='What does the cup of coffee remind you of?'
												as='textarea'
											/>
										</FormSection>
									</FormSections>
									<Button type='submit'>Enter Recipe</Button>
								</Form>
							)}
						</Formik>
					</FormWrapper>
				</RecipeFormContainer>
			)}
		</PageContainer>
	);
}
export default RecipeForm;
