import styled from "styled-components";
import { colors, devices } from "./MediaQueries";

export const FormWrapper = styled.div`
	margin: 0 auto;
	background: ${colors.backgroundLight};
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	border: 1px solid red;
	height: fit-content;
	width: 80vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.25rem 0rem;
`;

export const Label = styled.label`
	color: ${colors.highlight};
	font-size: 1.5rem;
`;

export const Input = styled.input`
	background: ${colors.highlight};
	height: 2rem;
	width: 80vw;
	max-width: 400px;
`;

export const Button = styled.button`
	background: ${colors.highlight};
	margin-top: 2rem;
	font-size: 1.5rem;
	padding: 1rem;
	border: none;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export const AddStepButton = styled(Button)`
	font-size: 1.25rem;
	padding: 0.5rem;
`;
