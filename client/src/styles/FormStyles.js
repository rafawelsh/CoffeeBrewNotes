import styled, { css } from "styled-components";
import { colors } from "./MediaQueries";
import FilteredPropsInputField from "../components/FIlteredPropsInputField";

export const SharedFormContainer = css`
	margin: 0 auto;
	background: ${colors.backgroundLight};
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
`;

export const FormContainer = styled.div`
	${SharedFormContainer}
`;

export const RecipeFormContainer = styled.div`
	${SharedFormContainer};
	height: 1200px;
`;

export const FormWrapper = styled.div`
	background: ${colors.divBackground};
	height: fit-content;
	width: 100%;
	max-width: 700px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0.5rem;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.25rem 0rem;
`;

export const SharedFormStyles = css`
	background-color: #eee;
	color: ${colors.textHeader};
	height: 2rem;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin: 10px 0 20px 0;
	padding: 1rem 2rem;
	box-sizing: border-box;
`;

export const Label = styled.label`
	color: ${colors.textColor};
	font-size: 1.5rem;
`;

export const Input = styled(FilteredPropsInputField)`
	${SharedFormStyles}
	width: 100%;
`;

export const Button = styled.button`
	background: ${colors.highlight};
	margin-top: 1rem;
	font-size: 1.25rem;
	padding: 1rem 2rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export const AddStepButton = styled(Button)`
	font-size: 1.25rem;
	padding: 0.5rem;
`;
