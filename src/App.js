// IMPORTS //
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// COMPONENTS //
import Header from './Components/Header.jsx';
import UserTable from './Components/UserTable.jsx';


function App() {

  const [userData, setUserData] = useState([]);

  // Fetch user data //
  useEffect( async () => {

    const results = await axios('https://api.github.com/users?per_page=10');

    setUserData(results.data);

  }, []);

  return (
    <div>
      <Header />
      <UserTable userData={userData} />
    </div>
  );
}

export default App;
