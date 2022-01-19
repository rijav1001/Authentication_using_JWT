import React, {useState} from 'react';
import './LoginForm.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Register from './Register';

const LoginForm = () => {
    const [username, setUsername] = useState('andrew777');
    const [password, setPassword] = useState('123abc#@!');
    const [err, setErr] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    
    const handleSubmit = (e) => {
        if (password.length < 8) {
            setErr(true);
            setErrMsg('Password invalid');
        } else {
            e.preventDefault();
            setSubmitted(true);
        }
        if (setErrMsg === "") {
            setUsername(e.target.value);
        }
    }

    const setToken = (token) => {
        return localStorage.setItem('token', token);
    }

    const getToken = () => {
        return localStorage.getItem('token');
    }

    return (
        <>
        <div className='main'>
            <div className='login'>
                <h2>Login Page</h2>
                <form action='' method='get' onSubmit={handleSubmit}>
                    <label htmlFor="username" className='username'>Enter Username</label>
                    <input type="text" placeholder='Username' onChange={handleUsername} className='input-username' value={username} />

                    <span>{errMsg}</span>
                    <label htmlFor="password" className='password'>Enter Password</label>
                    <input type="password" placeholder='Password' onChange={handlePassword} className='input-password' value={password} />

                    <button type='submit' className='btn' onClick={handleSubmit}>LOG IN</button>
                    <NavLink to='/register' style={{textDecoration: 'none'}}><button className='register'>SIGN UP</button></NavLink>
                </form>
                <Routes>
                    <Route exact path="/register" element={<Register/>}></Route>
                </Routes>
            </div>
        </div>
        </>
    )
}


export default LoginForm;