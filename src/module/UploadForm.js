import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import "../App.css";
import ReactResumableJs from "react-resumable-js";

function UploadForm(props) {
  const [uploadFiles, setUploadFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onUploadStart = () => {
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
            //disableDragAndDrop={false}
            onFileSuccess={(file, message) => {
              console.log("onFileSuccess - file: ", file);
              console.log("onFileSuccess - message: ", message);
            }}
            onFileAdded={async (file, resumable) => {
              console.log("onFileAdded - file: ", file);
              console.log("onFileAdded - resumable: ", resumable);
              //resumable.upload();
              console.log("uploadFiles: ", uploadFiles);
              await setUploadFiles([ ...uploadFiles, { file: file, resumable: resumable }]);
            }}
            maxFileSize={1000000000000}
            chunkSize={4000000}
            maxFiles={2}
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
            onPauseUpload={() =>{
                //this.inputDisable = true;
            }}
            onResumeUpload={() => {
                //this.inputDisable = true;
            }}
          />
      </div>
    </React.Fragment>
  );
}

export default UploadForm;
