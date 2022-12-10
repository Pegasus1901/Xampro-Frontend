import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Table from './components/Dashboard/Table/Table.jsx';
import Webcam from 'react-webcam';


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
  const webRef = useRef(null);

  const showImage = () => {
    console.log(webRef.current.getScreenshot({ width: 1920, height: 1080 }));
  }
  return (
    <>
      <div className="newtable">
        {/* <Table data={dataTable} column={column} /> */}
        <Webcam ref={webRef} />
        <button onClick={() => {
          showImage();
        }}>Click For ScreenShot </button>
        <h1>hii</h1>
      </div>
    </>
  )
}

export default App