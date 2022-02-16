import { useContext, useRef } from 'react';
import './login.scss';
import { login } from '../../contextApi/authContext/apiCalls';
import { AuthContext } from '../../contextApi/authContext/AuthContext';

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    login(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
        </div>
      </div>
      <div className='container'>
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h1>Sign In</h1>
          <input ref={email} type='email' placeholder='Email or phone number' />
          <input ref={password} type='password' placeholder='Password' />
          <button className='loginButton' type='submit'>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
