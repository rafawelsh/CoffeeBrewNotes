import React from "react";
import {
	SidebarContainer,
	CloseIcon,
	Icon,
	SidebarWrapper,
	SidebarRoute,
	SidebarLink,
	SideBtnWrap,
	SideBarMenu,
} from "../../styles/SidebarsStyles";

const Sidebar = ({ isOpen, toggle, loggedIn }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SideBarMenu>
					<SidebarLink to='new-recipe'>New Recipe</SidebarLink>
					<SidebarLink to='grid'>Grid</SidebarLink>
					<SidebarLink to='resources'>Resources</SidebarLink>
				</SideBarMenu>
				<SideBtnWrap>
					{!loggedIn ? (
						<>
							<SidebarRoute to='/login'>Login</SidebarRoute>
							<SidebarRoute to='/register'>Register</SidebarRoute>
						</>
					) : (
						<SidebarRoute to='/account'>RAFA HERE</SidebarRoute>
					)}
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
