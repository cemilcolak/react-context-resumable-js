import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";
import { UploadsContextProvider } from "./context/UploadContext"

function App(props) {
  return (
    <React.Fragment>
      <div className="App">
        <header>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/video-list">Video List</Link></li>
              </ul>
          </nav>
        </header>
        <fieldset>
          <p>
            You can add other inputs, selects or stuff right here to complete a
            form.
          </p>
        </fieldset>
        <UploadsContextProvider>
          <div className="pages">
            {props.children}
          </div>
        </UploadsContextProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
