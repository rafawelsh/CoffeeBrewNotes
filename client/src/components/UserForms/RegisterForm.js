import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { Input, Label, Button } from "../../styles/FormStyles";
import {
	FormContainer,
	AccountFormContainer,
	FormWrapper,
} from "../../styles/UserForms";

function RegisterForm() {
	const initialValues = {
		name: "",
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
		<FormContainer>
			<AccountFormContainer>
				<FormWrapper>
					<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
						<Form className='form-inner'>
							<h1>Register</h1>
							<Label htmlFor='name'>Name</Label>
							<Input type='text' name='name' id='name' />
							<Label htmlFor='email'>Email</Label>
							<Input type='text' name='email' id='email' />
							<Label htmlFor='password'>Password</Label>
							<Input type='password' name='password' id='password' />
							<Button type='submit'>Register</Button>
						</Form>
					</Formik>
				</FormWrapper>
			</AccountFormContainer>
		</FormContainer>
	);
}

export default RegisterForm;
