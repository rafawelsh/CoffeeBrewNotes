import styled from "styled-components";
import { colors, device } from "./MediaQueries";
import { BsFillGrid3X3GapFill, BsCardText } from "react-icons/bs";
import HeroImg from "../images/heroImageMobile2.png";
import { Link } from "react-router-dom";

export const Hero = styled.div`
	min-height: 90vh;

	@media ${device.mobileL} {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
`;

export const HeroImage = styled.img`
	background-image: url(${HeroImg});
	background-size: cover;
	height: calc(100vh - 350px);
	width: 100%;

	@media ${device.mobileL} {
		height: 85vh;
	}
`;

export const HeroContent = styled.div`
	height: fit-content;
	padding: 0.5rem;
	width: 90%;
	margin: 0 auto;
	color: ${colors.textHeader};
	background: ${colors.backgroundLight};

	h1 {
		margin: 0.5rem 0rem;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 0.25rem;
	background: ${colors.highlight};
	padding: 0.75rem 2rem;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}

	@media ${device.mobileL} {
		padding: 0.5rem 1rem;
	}
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	min-height: 90vh;
	text-align: center;
	margin: 0 auto;
	color: ${colors.textHeader};

	@media ${device.mobileL} {
		min-height: 70vh;
		h2 {
			font-size: 2rem;
		}
	}
`;

export const InfoSectionFlex = styled.div`
	@media ${device.mobileL} {
		display: flex;
		flex: 1 1 300px;
		flex-direction: row;
	}
`;

export const InfoSectionSteps = styled.section`
	width: 90%;
	min-height: 175px;
	margin: 2.5rem auto;
	margin: 1rem;
	background: ${colors.divBackground};
	border-radius: 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		padding: 0rem 0.5rem;
	}
`;

export const GridIcon = styled(BsFillGrid3X3GapFill)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.textHeader};
`;

export const CardIcon = styled(BsCardText)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.textHeader};
`;
