import React, {useState} from 'react';
import validator from 'validator';
import LoginForm from './LoginForm';
import { Route, Routes, NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState(false);

    const [emlMsg, setEmlMsg] = useState(""); 

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
          setErr(true);
        } else {
          setSubmitted(true);
          setErr(false);
        }
    }

    const errMsg = () => {
        return (
            <div
              className="error"
              style={{
                display: err ? '' : 'none',
              }}>
              <h1>Please enter all the fields</h1>
            </div>
        )
    }

    const succMsg = () => {
        return (
            <div
              className="success"
              style={{
                display: submitted ? '' : 'none',
              }}>
              <h1>{username} successfully registered!!</h1>
            </div>
        )
    }

    const validate = (e) => {
      if(!validator.isEmail(email)){
        setEmlMsg("Enter valid email")
        e.preventDefault();
      } else {
        setEmlMsg("");
      }
    }

    return (
      <div className='main'>
        <div className="register-form">
          <h2>User Registration</h2>
   
        <div className="messages">
          {errMsg()}
          {succMsg()}
        </div>
   
        <form onSubmit={validate} action='' method='post'>
          <label className="label">Enter Username</label>
          <input onChange={handleUsername} placeholder='Username' className="input"
            value={username} type="text" />

          <span>{emlMsg}</span>
          <label className="label">Enter Email</label>
          <input onChange={handleEmail} placeholder='Email' className="input"
            value={email} type="email" />
   
          <label className="label">Enter Password</label>
          <input onChange={handlePassword} placeholder='Password' className="input"
            value={password} type="password" />
   
          <button onClick={handleSubmit} className="btn" type="submit">SIGN UP</button>
          <NavLink to='/login' style={{textDecoration: 'none'}}><button className='register'>LOG IN</button></NavLink>
        </form>
        <Routes>
          <Route exact path="/login" element={<LoginForm/>}></Route>
        </Routes>
        </div>
      </div>
    )
}

export default Register;