import React from 'react';
import { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const [prop, setProp] = useState([]);

	return <Context.Provider value={{ prop, setProp }}>{children}</Context.Provider>;
};

export default ContextProvider;
