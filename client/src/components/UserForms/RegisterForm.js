import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/jwtContext";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input, Label, Button } from "../../styles/FormStyles";
import {
	FormContainer,
	AccountFormContainer,
	FormWrapper,
} from "../../styles/UserForms";

function RegisterForm() {
	const [redirect, setRedirect] = useState(false);
	const [authState, setAuthState] = useContext(AuthContext);
	console.log("RF 16: " + authState);

	const initialValues = {
		name: "",
		email: "",
		password: "",
	};

	const handleOnSubmit = (values, actions) => {
		axios({
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			method: "POST",
			url: "https://coffee-journal-app.herokuapp.com/api/user/register",
			data: values,
		})
			.then((response) => {
				actions.setSubmitting(false);
				actions.resetForm();
				setAuthState(localStorage.setItem("token", response.data.token));
				setRedirect(true);
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};
	console.log(authState);
	return (
		<FormContainer>
			{redirect ? (
				<Redirect
					to={{
						pathname: "/grid",
					}}
				/>
			) : (
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
			)}
		</FormContainer>
	);
}

export default RegisterForm;
