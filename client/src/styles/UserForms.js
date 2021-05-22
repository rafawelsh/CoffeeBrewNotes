import styled, { css } from "styled-components";
import { colors, device } from "./MediaQueries";

export const SharedFormContainer = css`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
`;

export const FormContainer = styled.main`
	height: 100%;
	min-height: calc(100vh - (17vh + 1.5rem));
	display: flex;
	align-items: center;
`;

export const AccountFormContainer = styled.div`
	${SharedFormContainer}

	@media ${device.tablet} {
		max-width: 800px;
		padding: 0rem 3rem;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const FormWrapper = styled.div`
	background: ${colors.divBackground};
	border-radius: 1rem;
	padding: 1rem 0.5rem;
	margin: 0.5rem 0rem 2rem;

	@media ${device.tablet} {
		max-width: 600px;
		width: 100%;
		padding: 2rem 3rem;
	}
`;
