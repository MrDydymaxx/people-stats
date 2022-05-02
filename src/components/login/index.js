import React from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import db from '../../../dbusers.json';
import './index.scss';

const Login = () => {
  // Here we init our navigate when user is logged successfully
  const navigate = useNavigate();
  // We init our cookies
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['login', 'username']);
  // We init our react-hook form for the login form
  const {
    register, handleSubmit, setError, formState, clearErrors
  } = useForm({
    mode: 'onChange'
  });
  // We init the validator for the login form
  const { isValid } = formState;
  // We init the errors notif for the login form
  const { errors } = formState;
  // Function that use a timeout, we will used when error appears
  const wait = (duration = 1000) => new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });

  // Here the submit function
  async function onSubmit(data) {
    // We check if the username input exist
    const user = db.results.filter((v) => v.login.username === data.username);
    // if exist...
    if (user.length !== 0) {
      // We check the password input with the salt saved in database
      const hashPasswordInput = CryptoJS.SHA256(
        data.password + user[0].login.salt
      ).toString();
      if (user[0].login.sha256 === hashPasswordInput) {
        // If password is ok so we init our cookie
        setCookie('login', true, { path: '/' });
        setCookie('username', data.username, { path: '/' });
        // Then the user is redirect to the homepage
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        // If password is wrong we notif the user that password is wrong
        setError('errorMessage', { message: 'Wrong password' });
      }
    } else {
      // else we notif that the username does not exist
      setError('errorMessage', { message: 'User does not exist' });
    }
    // If error appear then we clear them
    if (errors) {
      await wait(2000);
      clearErrors('errorMessage');
    }
  }

  return (
    <div className="Login">
      {errors.errorMessage && (
        <Alert variant="danger">
          <p className="text-center">{errors.errorMessage?.message}</p>
        </Alert>
      )}
      {errors.username?.type === 'required' && (
        <Alert variant="danger">
          <p className="text-center">{errors.username?.message}</p>
        </Alert>
      )}
      {errors.password?.type === 'required' && (
        <Alert variant="danger">
          <p className="text-center">{errors.password?.message}</p>
        </Alert>
      )}
      <h1 className="text-center text-light">People-Stats</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group size="lg" controlId="username">
          <Form.Label class="text-light">Pseudo : </Form.Label>
          <Form.Control
            type="username"
            className="bg-dark text-light"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            {...register('username', {
              required: 'Please enter your username'
            })}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label class="text-light">Password : </Form.Label>
          <Form.Control
            type="password"
            className="bg-dark text-light"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register('password', {
              required: 'Please enter your password'
            })}
          />
        </Form.Group>
        <Button
          size="lg"
          className="w-100 mt-2 bg-dark text-light"
          type="submit"
          disabled={!isValid}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
