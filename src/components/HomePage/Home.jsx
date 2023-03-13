import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <div className='title'>
          <h1>XAMPRO</h1>
          <div className='para'>
            <p>
              This “Xampro (Exam proctoring system)” is a
              web-based application used for taking online
              examinations. We are working on this system to
              make it more efficient in terms of memory and to
              help disabled users, such as blind students or
              people with disabilities. The system works on all
              web browsers. The system works on the MERN
              stack and has Python libraries used for the features
              such as “Text-to-Speech” and “Speech-to-Text”.
              This project reduces manual work and maximum
              abstraction and security. This is an application that
              can be accessed throughout the organization and
              outside as well with proper login credentials.

            </p>
          </div>
        </div>
        <div className="contact">
          <h2 className="contactHead">
            For Any Queries Contact Here:-
          </h2>
          <button>Contact Us</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home