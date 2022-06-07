import React, { createContext, useState } from "react";

export const UploadContext = createContext({});

export const UploadFilesContext = createContext([]);

export const UploadContextProvider = (props) => {
	const [uploadFile, setUploadFile] = useState({});

	return <UploadContext.Provider value={[uploadFile, setUploadFile]}>{props.children}</UploadContext.Provider>;
}

export const UploadFilesContextProvider = (props) => {
    
	return <UploadFilesContext.Provider value={[]}>{props.children}</UploadFilesContext.Provider>;
}

/*
export const useUpload = () => useContext(UploadContext);
export const useUploadFiles = () => useContext(UploadFilesContext);
*/