import styled from "styled-components";
import { colors } from "./MediaQueries";

export const PageContainer = styled.main`
	background: white;
`;

export const PageWrapper = styled.div`
	margin: 0 auto;
	color: ${colors.highlikght};
	background: ${colors.textLight};
	max-height: 100vh;
	height: 100vh;
`;
