import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { login } from '../redux/user.reducer';
import { TextField, Button, Box, Typography } from '@mui/material';

function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("social_auth_type", "normal");

        axios.post('https://sandbox.practical.me/api/login', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          if (response.data.isSuccess) {
            dispatch(login(response.data.data));
          } else {
            alert('Login failed: ' + response.data.message);
          }
          setSubmitting(false);
        })
        .catch(error => {
          console.error('Login error:', error);
          alert('Login error: ' + error.message);
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, handleChange, handleBlur, values }) => (
        <Form>
          <Box sx={{ maxWidth: 300, mx: "auto", my: 4 }}>
            <Typography variant="h6" gutterBottom>
              Login
            </Typography>
            <Field as={TextField} type="email" name="email" label="Email" variant="outlined" fullWidth margin="normal" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            <Field as={TextField} type="password" name="password" label="Password" variant="outlined" fullWidth margin="normal" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting} sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
