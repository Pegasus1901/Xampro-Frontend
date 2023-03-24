import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizManager from './components/Test/QuizManager.jsx';
import Login from './components/login/Login.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';
import Profile from './components/ProfilePage/Profile.jsx';
import WebcamModule from './components/WebcamModule/WebcamModule.jsx';
import RenderTable from './components/Table/RenderTable.jsx';
import Nav from './components/VoiceModule/ModuleTry01/Nav';
import Left from './components/Dashboard/Left.jsx';
import TestRegistration from './components/registration/TestRegistration.jsx';
import TestRendererModule from './components/Test/TestRendererModule.jsx';
import TxtToSpeech from './components/TextToSpeech/TxtToSpeech.jsx';
import TestCreator from './components/Create Test/TestCreator.jsx';
import Home from './components/HomePage/Home';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/webcammodule" element={<WebcamModule />} />
          <Route path="/rendertable" element={<RenderTable />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/quizmanager" element={<TestRendererModule />} />
          <Route path="/left" element={<Left />} />
          <Route path="/testRegistration" element={<TestRegistration />} />
          <Route path="/txttospeech" element={<TxtToSpeech />} />
          <Route path="/testcreation" element={<TestCreator />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App