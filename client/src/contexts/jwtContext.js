import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, setAuthState] = useState(localStorage.getItem("token"));

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>
			{children}
		</AuthContext.Provider>
	);
}
