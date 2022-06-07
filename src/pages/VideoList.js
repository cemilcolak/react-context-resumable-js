import React, { useState } from "react";
import "../App.css";
import { Button } from 'reactstrap';
import UploadForm from '../module/UploadForm';

function VideoList() {

    const [uploadForm, setUploadForm] = useState(false);

    return (
        <div className="App">
            <fieldset>
                <p>
                    Burası Bir Video List Sayfasıdır.
                </p>
            </fieldset>
            <Button onClick={() => setUploadForm(!uploadForm)}>
                New Video Upload
            </Button>
            <fieldset>
                {uploadForm && <UploadForm />}
            </fieldset>
        </div>
    );
}

export default VideoList;
