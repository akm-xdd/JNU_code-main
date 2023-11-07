import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ uname: "", pass: errors.pass });
      } else {
        onLogin(); // Call the onLogin function passed from the parent component
        navigate('/Home'); // Navigate to '/Home' after successful login
      }
    } else {
      setErrorMessages({ uname: errors.uname, pass: "" });
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
              <p className='text-white-50 mb-5'>Please enter your login ID and password!</p>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4 mx-auto w-100'
                  labelClass='text-white'
                  label='Username'
                  id='email'
                  type='text'
                  size='lg'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errorMessages.uname && <div className="text-danger">{errorMessages.uname}</div>}
                <MDBInput
                  wrapperClass='mb-4 mx-auto w-100'
                  labelClass='text-white'
                  label='Password'
                  id='password'
                  type='password'
                  size='lg'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errorMessages.pass && <div className="text-danger">{errorMessages.pass}</div>}
                <MDBBtn outline className='mx-5 px-5' color='white' size='lg' type='submit'>
                  Login
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;