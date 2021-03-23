import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { PageContainer } from "../styles/PageStyles";
import {
	Form,
	FormWrapper,
	FormGroup,
	Input,
	Label,
	Button,
} from "../styles/FormStyles";

function RegisterForm() {
	const initialValues = {
		email: "",
		password: "",
	};

	const handleOnSubmit = (values, actions) => {
		axios({
			method: "POST",
			url: "/api/user/register",
			data: values,
		})
			.then((response) => {
				actions.setSubmitting(false);
				actions.resetForm();
				localStorage.setItem("token", response.data.token);
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<PageContainer>
			<FormWrapper>
				<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
					<Form className='form-inner'>
						<h2>Register</h2>
						<FormGroup className='form-group'>
							<Label htmlFor='email'>Email</Label>
							<Input type='text' name='email' id='email' />
						</FormGroup>
						<FormGroup className='form-group'>
							<Label htmlFor='password'>Password</Label>
							<Input type='password' name='password' id='password' />
						</FormGroup>
						<button type='submit'>Register</button>
					</Form>
				</Formik>
			</FormWrapper>
		</PageContainer>
	);
}

export default RegisterForm;
