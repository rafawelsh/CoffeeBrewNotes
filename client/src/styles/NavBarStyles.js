import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { colors, device } from "./MediaQueries";

export const Nav = styled.nav`
	background: ${colors.backgroundLight};
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: ${colors.textHeader};
	text-decoration: none;
	font-size: 1.5rem;
	padding: 2rem 1rem;
	cursor: pointer;

	&.active,
	&:hover {
		color: ${colors.highlight};
	}

	/* @media ${device.tablet} {
		font-size: 1.125rem;

		.logo {
			font-size: 1.5rem;
		}
	} */
`;

// styled for Sidebar.js
export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: ${colors.divBackground};
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	/* transform: ${({ isOpen }) =>
		isOpen ? "translateY(0)" : "translateY(-100%)"}; */
	/* transition: transform 0.3s ease-in-out; */
	${(props) => {
		if (props.isOpen) {
			return `
				transform: translateY(0);
				transition: transform 0.3s ease-in-out;
			`;
		} else {
			return `
					transform: translateY(-100%);
				`;
		}
	}};

	@media ${device.tablet} {
		transform: none;
		transition: none;
		background: none;
		justify-content: flex-end;
		position: static;
		flex-flow: row nowrap;
		height: 10vh;
		font-size: 1rem;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: ${colors.textHeader};
	padding: 0.5rem 1rem;
	margin: 2rem 1rem;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${colors.highlight};
		color: #fff;
	}
`;

export const Bars = styled(FaBars)`
	color: ${colors.highlight};
`;

export const CloseIcon = styled(FaTimes)`
	color: ${colors.highlight};
`;

export const Icon = styled.div`
	position: ${({ isOpen }) => (isOpen ? "fixed" : "block")};
	padding: 1rem 2rem;
	top: 0rem;
	right: 0rem;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
	z-index: 20;
	@media ${device.tablet} {
		display: none;
	}
`;
