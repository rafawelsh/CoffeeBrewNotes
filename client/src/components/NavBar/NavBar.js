import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
	return (
		<>
			<Nav>
				<NavLink exact to='/' className='logo'>
					CoffeeBrewNotes
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink exact to='/new-recipe' activeStyle>
						New Recipe
					</NavLink>
					<NavLink exact to='/grid'>
						Grid
					</NavLink>
					<NavLink exact to='/home'>
						Home
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/login'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default NavBar;
