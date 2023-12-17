import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import '../css/App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/user");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Failed to fetch contacts");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
  };


  const handleLogin = () => {
    
    if (username === "gurkan" && password === '123') {
      navigate("/mainpage");
    } else {
      setError('Username or Password is wrong.');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>201928011   Seng429_HW1</p>
        <p>(Username = gurkan password = 123)</p>

        
        <input className="input-box" 
        type="text" 
        onChange={handleUsernameChange} 
        placeholder="Username" />

        <div className="spacing" />

        <input className="input-box" 
        type="text" 
        onChange={handlePasswordChange} 
        placeholder="Password" />

        <div className="spacing" />

        <button className="button-box" onClick={handleLogin}>Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        
      </header>
    </div>
    
    
  );
}

export default LoginPage;