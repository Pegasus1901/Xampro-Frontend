import React, { useRef } from 'react'
import {Navlink} from 'react-dom'
import '../CSS/form.css'

//const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const TeacherRegistration = () => {

  const userRef = useRef();
  const errRef = useRef();

  return (<>
    <div className="wrapper">
      <h1>New Here!</h1>
      <p>Lets Get Registered</p>
      <form action="" 
      // onSubmit={handleSubmit}
      >
        <input type="text"
          id='username'
          // ref={userRef}
          autoComplete='off'
          // onChange={(e) => setUser(e.target.value)}
          // value={user}
          required placeholder="Enter username" />
        <input type="Password"
          id='password'
          // onChange={(e) => setPwd(e.target.value)}
          // value={pwd}
          required
          placeholder="Password" />
        <input type="Password"
          id='confirmPassword'
          // onChange={(e) => setPwd(e.target.value)}
          // value={pwd}
          required
          placeholder="Confirm Password" />
      </form>
      <button>Sign up</button><div className='backToLogin'>
      <p>Already Registered?<a className='login' href="#"> Login</a></p>
      </div>
    </div>
  </>
  )
}

export default TeacherRegistration