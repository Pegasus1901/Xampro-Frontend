import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Left from '../Dashboard/Left';
import Table from './Table';


const RenderTable = () => {
    const [dataTable, setDataTable] = useState([])
    console.log(dataTable);
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
    return (
        <>
            <Left />
            <Table data={dataTable} column={column} />
        </>
    )
}

export default RenderTable