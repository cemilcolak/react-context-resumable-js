import React, {useContext, useState} from "react";
import {Button, Container} from "reactstrap";
import "../App.css";
import ReactResumableJs from "react-resumable-js";
import { UploadContext } from "../context/UploadContext";

function UploadForm(props) {

    const [uploadFile, setUploadFile] = useContext(UploadContext);

    const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onUploadStart = () => {
        console.log("uploadFile: ",uploadFile);
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
                    service="http://local.engineapi.merzigo.net/api/videos/6/upload"
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

                    <Button onClick={onUploadStart}>Start</Button>
            </div>
        </React.Fragment>
    );
}

export default UploadForm;
