import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import QuizManager from './components/Test/QuizManager.jsx';
// import { Box} from '@mui/system';
import { Container, Box, Typography } from '@mui/material';
import Login from './components/login/Login.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';
import Table from './components/Table/Table.jsx';
import Header from './components/HomePage/Header.jsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/HomePage/Footer.jsx';
import Home from './components/HomePage/Home.jsx';
// import Profile from './components/ProfilePage/Profile.jsx';
import Navigation from './components/VoiceModule/Navigation.jsx';
import WebcamModule from './components/WebcamModule/WebcamModule.jsx';




const App = () => {
  // const [dataTable, setDataTable] = useState([])
  // console.log(dataTable);
  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setDataTable(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  // const column = [
  //   { heading: 'Name', value: 'name' },
  //   { heading: 'Email', value: 'email' },
  //   { heading: 'Phone', value: 'phone' },
  //   { heading: 'City', value: 'address.city' },
  // ]


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

      {/* <Table data={dataTable} column={column} /> */}

      {/* <WebcamModule/> */}
      {/* <DDashboard/> */}
      {/* <Table/> */}
      {/* <Profile/> */}
      {/* <Navigation /> */}
    </>
  )
}

export default App