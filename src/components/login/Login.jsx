import React, { useEffect, useRef, useState, useContext } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";   
// import AuthContext from './context/AuthProvider';
import './form.css';
import axios from './axios';
import { Link } from 'react-router-dom';

const LOGIN_URL = '/auth'
//change path with backend info

const Login = () => {
    // const { loginWithRedirect } = useAuth0();

    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));

            const AccessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;

            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized Access')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            {
                success ? (
                    <section>
                        <h2>Login Success</h2>
                    </section>
                ) : (
                    <div className="wrapper">
                        <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Hello Again!</h1>
                        <p>Welcome back you've <br /> been missed!</p>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text"
                                id='username'
                                className='input'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required placeholder="Enter username" />
                            <input type="password"
                                id='password'
                                    className='input'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                placeholder="Password" />
                            <p className="recover">
                                <a href="#">Forgot Your Password?</a>
                            </p>
                        </form>
                        {/* <button onClick={() => loginWithRedirect()}>Sign in</button> */}


                        <Link to='/dashboard'><button
                        className='signbutton'
                            // onClick={handleSubmit}
                        >Sign in</button></Link>

                        <div className="not-member">
                            Not a member? <a href="#">Register Now</a>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Login