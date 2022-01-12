// IMPORTS //
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserContainer from './Components/UserContainer.jsx';

// STYLES //
import './App.css';

function App() {

  const [userData, setUserData] = useState([]);

  // Fetch user data //
  useEffect( async () => {

    const results = await axios('https://api.github.com/users?per_page=10');

    setUserData(results.data);

  }, []);


  return (
    <React.Fragment>
      <UserContainer />
    </ React.Fragment>
  );
}

export default App;
