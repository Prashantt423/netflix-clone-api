import React, { useContext, useState } from 'react';
import { login } from '../../../contextApi/authContext/apiCalls.js';
import { AuthContext } from '../../../contextApi/authContext/AuthContext';
import './login.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    navigate('/');
  };

  return (
    <div className='login'>
      {isFetching ? (
        <div className='waiting'>
          <CircularProgress size='100px' color='inherit' />
        </div>
      ) : (
        <form className='loginForm'>
          <input
            type='text'
            placeholder='email'
            className='loginInput'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            className='loginInput'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='loginButton'
            onClick={handleLogin}
            disabled={isFetching}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
