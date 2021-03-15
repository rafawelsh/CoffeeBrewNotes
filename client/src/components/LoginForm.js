import React from "react";

function LoginForm() {
	return (
		<form>
			<div className='form-inner'>
				<h2></h2>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
				</div>
			</div>
		</form>
	);
}

export default LoginForm;
