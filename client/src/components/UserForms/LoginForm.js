import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input, Label, Button } from "../../styles/FormStyles";
import {
	FormContainer,
	AccountFormContainer,
	FormWrapper,
} from "../../styles/UserForms";

function LoginForm({ login, setLogin }) {
	const [redirect, setRedirect] = useState(false);
	const initialValues = {
		email: "",
		password: "",
	};

	const { REACT_APP_DEV_DB_LOGIN } = process.env;

	const handleOnSubmit = (values, actions) => {
		axios({
			method: "POST",
			url: { REACT_APP_DEV_DB_LOGIN },
			data: values,
		})
			.then((response) => {
				actions.setSubmitting(false);
				actions.resetForm();
				localStorage.setItem("token", response.data.token);
				setLogin(response.data.token);
				setRedirect(true);
			})
			.catch((error) => {
				actions.setSubmitting(false);
				console.log(error);
			});
	};

	console.log({ login });

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
