import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "../../styles/NavBarStyles";

const NavBar = ({ toggle, loggedIn }) => {
	return (
		<>
			<Nav>
				<NavLink exact to='/' className='logo'>
					CoffeeBrewNotes
				</NavLink>

				<Bars onClick={toggle} />

				<NavMenu>
					<NavLink exact to='/new-recipe' activeStyle>
						New Recipe
					</NavLink>
					<NavLink exact to='/grid' activeStyle>
						Grid
					</NavLink>
					<NavLink to='/resources'>Resources</NavLink>
				</NavMenu>
				{!loggedIn ? (
					<>
						<NavBtn>
							<NavBtnLink to='/login'>Sign In</NavBtnLink>
						</NavBtn>
						<NavBtn>
							<NavBtnLink to='/register'>Register</NavBtnLink>
						</NavBtn>
					</>
				) : (
					<NavBtn>
						<NavBtnLink to='/register'>RAFA HERE</NavBtnLink>
					</NavBtn>
				)}
			</Nav>
		</>
	);
};

export default NavBar;
