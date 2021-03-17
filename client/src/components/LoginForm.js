import React from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";

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
		<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
			<Form className='form-inner'>
				<h2>Login</h2>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<Field type='text' name='email' id='email' />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<Field type='text' name='password' id='password' />
				</div>
				<button type='submit'>Login</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;
