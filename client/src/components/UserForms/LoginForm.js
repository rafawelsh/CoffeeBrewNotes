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

function LoginForm() {
	const [authState, setAuthState] = useContext(AuthContext);
	console.log("LF 15: " + authState);

	const [redirect, setRedirect] = useState(false);
	const initialValues = {
		email: "",
		password: "",
	};

	const handleOnSubmit = (values, actions) => {
		axios({
			method: "POST",
			url: "https://coffee-journal-app.herokuapp.com/api/user/login",
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
								<h1>Login</h1>
								<Label htmlFor='email'>Email</Label>
								<Input type='email' name='email' id='email' />
								<Label htmlFor='password'>Password</Label>
								<Input type='password' name='password' id='password' />
								<Button type='submit'>Login</Button>
							</Form>
						</Formik>
					</FormWrapper>
				</AccountFormContainer>
			)}
		</FormContainer>
	);
}

export default LoginForm;
