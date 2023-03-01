import axios from 'axios';
import React, { useState, useEffect } from 'react'

axios.defaults.baseURL ="https://opentdb.com/"


const UseAxios = ({url}) => {
    
    const [response,setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      const fetchData= () =>{
        axios
        .get(url)
        .then(res => setResponse(res.data))
        .catch(err => setError(error))
        .finally(() => setLoading(false))
      }
      fetchData();
    }, [url])
    

  return ({response,error,loading})
}

export default UseAxios