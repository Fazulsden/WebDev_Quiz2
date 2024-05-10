import React from 'react';
import UserProfile from './UserProfile';
import FAQList from './FAQList';

function UserPage() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile />
      <FAQList /> {/* This can be conditional based on user role or permissions */}
    </div>
  );
}

export default UserPage;
