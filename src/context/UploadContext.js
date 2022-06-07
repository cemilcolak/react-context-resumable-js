import React, { createContext } from "react";

export const UploadContext = createContext({});

export const UploadFilesContext = createContext([]);

export const UploadContextProvider = (props) => {

	return <UploadContext.Provider value={{}}>{props.children}</UploadContext.Provider>;
}

export const UploadFilesContextProvider = (props) => {
    
	return <UploadFilesContext.Provider value={[]}>{props.children}</UploadFilesContext.Provider>;
}

/*
export const useUpload = () => useContext(UploadContext);
export const useUploadFiles = () => useContext(UploadFilesContext);
*/