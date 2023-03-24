import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import QuizManager from './components/Test/QuizManager.jsx';
import Login from './components/login/Login.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';
import Profile from './components/ProfilePage/Profile.jsx';
import WebcamModule from './components/WebcamModule/WebcamModule.jsx';
import RenderTable from './components/Table/RenderTable.jsx';
import Nav from './components/VoiceModule/ModuleTry01/Nav';

// import VoiceTrial02 from './components/VoiceModule/ModuleTry02/VoiceTrial02.jsx';
// import TestRegistration from './components/registration/TestRegistration.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/webcammodule" element={<WebcamModule />} />
          <Route path="/rendertable" element={<RenderTable />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/quizmanager" element={<QuizManager />} />




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App