import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import QuizManager from './components/Test/QuizManager.jsx';
// import { Box} from '@mui/system';
import { Container, Box, Typography } from '@mui/material';
import Login from './components/login/Login.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';
import { BrowserRouter } from 'react-router-dom';
import Profile from './components/ProfilePage/Profile.jsx';
import Navigation from './components/VoiceModule/Navigation.jsx';
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
      {/* <Navigation /> */}
    </>
  )
}

export default App