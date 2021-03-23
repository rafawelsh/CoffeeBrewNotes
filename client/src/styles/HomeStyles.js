import styled from "styled-components";
import { colors } from "./MediaQueries";
import heroImageMobile from "../images/heroImageMobile.jpg";

export const Hero = styled.div`
	background-image: url(${heroImageMobile});
	background-size: cover;
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

// export const HeroImage = styled.div`
// 	background-image: url(${heroImageMobile});
// 	background-size: cover;
// 	width: 100%;
// 	height: 100%;
// `;

export const HeroContent = styled.div`
	width: 90%;
	height: fit-content;
	padding: 1rem;
	margin-bottom: 100px;
	color: ${colors.textHeader};
	background: ${colors.backgroundLight};
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	height: 90vh;
`;

export const InfoSectionSteps = styled.section`
	border: 2px solid red;
`;
