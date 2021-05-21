import React, { useContext } from "react";
import { AuthContext } from "./contexts/jwtContext";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
	const [authState] = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (authState) {
					return <Component {...rest} {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/register",
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
}

export default ProtectedRoute;
