import React, {useContext, useState} from "react";
import {Button, Container} from "reactstrap";
import "../App.css";
import ReactResumableJs from "react-resumable-js";
import { UploadsContext } from "../context/UploadContext";

function UploadForm(props) {

    const [uploadFile, setUploadFile] = useContext(UploadsContext);
    const [formData, setFormData] = useState({});

    const onSubmitForm = () => {
        //change of target api url
        uploadFile.opts.target = "http://server.url/upload"
        uploadFile.upload();
    }

    return (
        <React.Fragment>
            <div className="App">
                <ReactResumableJs
                    uploaderID="deneme-upload"
                    dropTargetID="myDropTarget"
                    filetypes={["jpg", "png", "mov", "txt"]}
                    fileAccept={["*/*"]}
                    fileAddedMessage="Started!"
                    completedMessage="Complete!"
                    service={process.env.REACT_APP_ENGINE_API}
                    textLabel="Uploaded files"
                    previousText="Drop to upload your media:"
                    //disableDragAndDrop={false}}
                    onFileSuccess={(file, message) => {
                        console.log("onFileSuccess - file: ", file);
                        console.log("onFileSuccess - message: ", message);
                    }}
                    onFileAdded={async(file, resumable) => {
                        console.log("onFileAdded - file: ", file);
                        console.log("onFileAdded - resumable: ", resumable);
                        //resumable.upload();
                        setUploadFile(resumable);
                    }}
                    maxFileSize={1000000000000}
                    chunkSize={4000000}
                    maxFiles={1}
                    simultaneousUploads={1}
                    startButton={true}
                    pauseButton={true}
                    cancelButton={true}
                    onStartUpload={(file, resumable) => {
                        console.log("onStartUpload - file: ", file);
                        console.log("onStartUpload - resumable: ", resumable);
                        //resumable.upload();
                    }}
                    onCancelUpload={() => {
                        //this.inputDisable = true;
                    }}
                    onPauseUpload={() => {
                        //this.inputDisable = true;
                    }}
                    onResumeUpload={() => {
                        //this.inputDisable = true;
                    }}
                    />
                    <Button onClick={onSubmitForm}>Custom Upload</Button>
            </div>
        </React.Fragment>
    );
}

export default UploadForm;
