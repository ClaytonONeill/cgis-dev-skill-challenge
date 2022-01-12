// IMPORTS //
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// COMPONENTS //
import Header from './Components/Header.jsx';
import UsersContainer from './Components/UsersContainer.jsx';


function App() {

  // Set data to array //
  const [userData, setUserData] = useState([]);

  // Fetch user data //
  useEffect( async () => {

    const results = await axios('https://api.github.com/users?per_page=10');

    setUserData(results.data.sort((userA, userB) => {
      return userA.login > userB.login ? 1 : -1
    }));

  }, []);


  return (
    <React.Fragment>
      <Header />
      <UsersContainer userData={userData} />
    </ React.Fragment>
  );
}

export default App;
