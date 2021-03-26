import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./MediaQueries";

export const StyledGrid = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
`;

export const StyledItem = styled.li`
	background-color: ${colors.divBackground};
	border-radius: 10px;
	flex: 1 1 200px;
	margin: 1rem;
	display: grid;

	img {
		height: 10%;
		width: auto;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
