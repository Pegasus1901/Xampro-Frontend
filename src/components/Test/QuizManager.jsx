import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Quiz from './Quiz'
import Result from './Result'
import Settings from './Settings'

const QuizManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Settings/>}/>
                <Route path='/quiz' element={<Quiz />}/>
                <Route path='/result' element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

export default QuizManager