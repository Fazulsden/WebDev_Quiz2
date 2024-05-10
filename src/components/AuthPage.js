import React from 'react';
import LoginForm from './LoginForm';

function AuthPage() {
  return (
    <div>
      <h1>Welcome to the Authentication Page</h1>
      <LoginForm />
      {/* Here you can also add a link or button to navigate to a SignUpForm if needed */}
    </div>
  );
}

export default AuthPage;
