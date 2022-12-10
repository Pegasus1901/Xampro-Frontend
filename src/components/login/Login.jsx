import React, { useEffect, useRef, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../CSS/form.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

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

        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
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
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required placeholder="Enter username" />
                            <input type="password"
                                id='password'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                placeholder="Password" />
                            <p className="recover">
                                <a href="#">Forgot Your Password?</a>
                            </p>
                        </form>
                            {/* <button onClick={() => loginWithRedirect()}>Sign in</button> */}
                            <button onClick={handleSubmit}>Sign in</button>

                        <div className="not-member">
                            Not a member? <a href="#">Register Now</a>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Login