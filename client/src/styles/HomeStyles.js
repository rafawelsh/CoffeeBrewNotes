import styled, { css } from "styled-components";
import { colors, device } from "./MediaQueries";
import { BsFillGrid3X3GapFill, BsCardText } from "react-icons/bs";
import HeroImg from "../images/heroImageMobile2.png";
import { Link } from "react-router-dom";

export const Hero = styled.div`
	min-height: 90vh;

	@media ${device.tablet} {
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
		height: 60vh;
	}

	@media ${device.tablet} {
		height: 80vh;
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

	p {
		margin-bottom: 2rem;
	}

	@media ${device.laptop} {
		h1 {
			font-size: 3rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 0.25rem;
	background: ${colors.textHeader};
	padding: 0.75rem 2rem;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${colors.highlight};
	}

	@media ${device.tablet} {
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
	}
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	min-height: 75vh;
	text-align: center;
	margin: 0 auto;
	color: ${colors.textHeader};

	@media ${device.tablet} {
		min-height: 70vh;
		width: 90vw;
		max-width: 1200px;
		h2 {
			font-size: 2.5rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
`;

export const InfoSectionFlex = styled.div`
	@media ${device.tablet} {
		display: flex;
		flex: 1 1 300px;
		flex-direction: row;
		justify-content: center;
	}
`;

export const InfoSectionSteps = styled.section`
	width: 90vw;
	min-height: 175px;
	margin: 1rem auto;
	background: ${colors.divBackground};
	border-radius: 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		padding: 0rem 0.5rem;
		font-size: 1.5rem;
	}

	@media ${device.tablet} {
		height: 400px;

		margin: 2rem;
	}
`;

export const StyledIcon = css`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.textHeader};

	@media ${device.laptop} {
		height: 3rem;
		width: 3rem;
	}
`;
export const GridIcon = styled(BsFillGrid3X3GapFill)`
	${StyledIcon}
`;

export const CardIcon = styled(BsCardText)`
	${StyledIcon}
`;
