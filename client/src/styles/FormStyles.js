import styled from "styled-components";
import { colors, devices } from "./MediaQueries";

export const FormWrapper = styled.div`
	margin: 0 auto;
	background: ${colors.backgroundLight};
	max-height: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	/* background: ${colors.backgroundLight}; */
	height: fit-content;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Label = styled.label`
	color: ${colors.highlight};
`;
export const Input = styled.input`
	background: ${colors.highlight};
`;
