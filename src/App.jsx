import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import QuizManager from './components/Test/QuizManager.jsx';
// import { Box} from '@mui/system';
import { Container, Box, Typography } from '@mui/material';
import Login from './components/login/Login.jsx';
// import Table from './components/Dashboard/Table/Table.jsx';
import DDashboard from './components/Dashboard/DDashboard.jsx';


const App = () => {
  // const [dataTable, setDataTable] = useState([])
  // // console.log(dataTable);
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
  // const webRef = useRef(null);

  // const showImage = () => {
  //   console.log(webRef.current.getScreenshot({ width: 1920, height: 1080 }));
  // }
  {/* <Table data={dataTable} column={column} />
  <Webcam ref={webRef} />
  <button onClick={() => {
    showImage();
  }}>Click For ScreenShot </button>
  <h1>hii</h1> */}
  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant='h2' fontWeight='bold'>Quiz App</Typography>
          <QuizManager />
        </Box>
      </Container>
    </>
  )
}

export default App