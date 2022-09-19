import React from 'react';
import { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	return <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>;
};

export default ContextProvider;
