import styled, { css } from "styled-components";
import { colors } from "./MediaQueries";
import { BsFillGrid3X3GapFill, BsCardText } from "react-icons/bs";

export const Hero = styled.div`
	background-size: cover;
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

export const HeroContent = styled.div`
	width: 90%;
	height: 200px;
	padding: 1rem;
	/* margin-bottom: 100px; */
	color: ${colors.textHeader};
	background: ${colors.backgroundLight};
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InfoSectionSteps = styled.section`
	width: 90%;
	min-height: 175px;
	margin: 2rem 0rem;
	background: ${colors.divBackground};
	border-radius: 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		width: 90%;
	}
`;

export const GridIcon = styled(BsFillGrid3X3GapFill)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.highlight};
`;

export const CardIcon = styled(BsCardText)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.highlight};
`;
