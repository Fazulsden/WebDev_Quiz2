import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user.reducer';

function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://sandbox.practical.me/api/login', values)
          .then(response => {
            dispatch(login(response.data.data.auth_token)); // Update token in state
            setSubmitting(false);
          })
          .catch(error => console.error('Login error:', error));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit" disabled={isSubmitting}>Login</button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
