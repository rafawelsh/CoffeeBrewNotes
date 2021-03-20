import styled from "styled-components";
import { colors } from "./MediaQueries";
import heroImageMobile from "../images/heroImageMobile.jpg";
export const Hero = styled.div`
	/* background: ${colors.backgroundLight}; */
	background-image: url(${heroImageMobile});
	background-size: cover;
	width: 100%;
	height: 90vh;
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	height: 500px;
`;
