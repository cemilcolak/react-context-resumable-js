import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './pages/Dashboard';
import VideoList from './pages/VideoList';
import { Suspense, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App>
      <Routes>
        <Route exact path="/video-list" element={<VideoList />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="*" element={<App />}/>
      </Routes>
    </App>
  </Router>
);

