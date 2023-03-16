import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import QuizManager from './components/Test/QuizManager.jsx';
import Login from './components/login/Login.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';
import Profile from './components/ProfilePage/Profile.jsx';
import Nav from './components/VoiceModule/Nav.jsx';
import WebcamModule from './components/WebcamModule/WebcamModule.jsx';
import RenderTable from './components/Table/RenderTable.jsx';

const App = () => {

  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
        <QuizManager />
        </Box>
      </Container> */}
      {/* </BrowserRouter> */}

      {/* <RenderTable/> */}
      {/* <WebcamModule/> */}
      {/* <DDashboard/> */}
      {/* <Table/> */}
      {/* <Profile/> */}
      {/* <Nav /> */}
    </>
  )
}

export default App