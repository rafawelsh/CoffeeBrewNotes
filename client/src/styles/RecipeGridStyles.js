import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./MediaQueries";

export const StyledGrid = styled.ul`
	list-style-type: none;
	display: grid;
	padding: 0;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-rows: 175px;
	grid-gap: 0.5rem;
`;

export const StyledItem = styled.li`
	background-color: ${colors.divBackground};
	border-radius: 10px;

	img {
		height: 20%;
		width: 15%;
		padding: 1rem;
		padding-right: 1.5rem;
		align-self: center;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	display: flex;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
