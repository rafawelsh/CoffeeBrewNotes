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

function LoginForm() {
	const initialValues = {
		email: "",
		password: "",
	};

	const handleOnSubmit = (values, actions) => {
		axios({
			method: "POST",
			url: "/api/user/login",
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
						<h1>Login</h1>
						<Label htmlFor='email'>Email</Label>
						<Input type='email' name='email' id='email' />
						<Label htmlFor='password'>Password</Label>
						<Input type='password' name='password' id='password' />

						<Button type='submit'>Login</Button>
					</Form>
				</Formik>
			</FormWrapper>
		</PageContainer>
	);
}

export default LoginForm;
