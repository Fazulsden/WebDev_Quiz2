import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage or cookie
    const token = localStorage.getItem('token'); // Assuming the token is stored in local storage

    // If token exists, make the API request with the token
    if (token) {
      axios.get('https://sandbox.practical.me/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        }
      })
        .then(response => {
          if (response.data.isSuccess) {
            setProfile(response.data.data);
          }
        })
        .catch(error => console.error('Error fetching profile:', error));
    } else {
      console.error('Token not found. User is not authenticated.');
    }
  }, []);

  return profile ? (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">First Name</TableCell>
            <TableCell>{profile.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Sur Name</TableCell>
            <TableCell>{profile.sur_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Email</TableCell>
            <TableCell>{profile.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Phone</TableCell>
            <TableCell>{profile.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ) : <div>Loading profile...</div>;
}

export default UserProfile;
