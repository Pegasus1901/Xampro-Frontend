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
import Profile from './components/ProfilePage/Profile.jsx';


const App = () => {
  const [dataTable, setDataTable] = useState([])
  // console.log(dataTable);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, [])

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]
  // const webRef = useRef(null);

  // const showImage = () => {
  //   console.log(webRef.current.getScreenshot({ width: 1920, height: 1080 }));
  // }
  // { 
  // <Webcam ref={webRef} />
  // <button onClick={() => {
  //   showImage();
  // }}>Click For ScreenShot </button>
  // <h1>hii</h1> }
  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
          <QuizManager />
        </Box>
      </Container> */}
      {/* <Table data={dataTable} column={column} /> */}
      {/* <DDashboard/> */}
      {/* <Table/> */}
      {/* </BrowserRouter> */}
      <Profile/>
    </>
  )
}

export default App