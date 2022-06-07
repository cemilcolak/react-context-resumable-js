import React, { createContext, useState, useEffect } from "react";

export const UploadsContext = createContext({});

export const UploadsContextProvider = (props) => {
	const [uploads, setUploads] = useState([]);

	return <UploadsContext.Provider value={[uploads, setUploads]}>{props.children}</UploadsContext.Provider>;
}