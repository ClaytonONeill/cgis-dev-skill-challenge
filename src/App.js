// IMPORTS //
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// COMPONENTS //
import Header from './Components/Header.jsx';
import UsersContainer from './Components/UsersContainer.jsx';

// STYLES //
import './App.css';

// FETCH USER DATA //
const getData = async () => {
  return await axios('https://api.github.com/users?per_page=10')
  .then((res) =>  {
    const results = res.data.sort((user1, user2) => {
      return user1.login > user2.login ? 1 : -1
    })
    return results;
  })
  .catch((err) => {
    console.error(err)
  })
};

function App() {

  const [userData, setUserData] = useState([]);

  // SET DATA TO ARRAY ON PAGE LOAD //
  useEffect(() => {
    getData().then(userData =>  {
      setUserData(userData)
    })
  }, []);


  return (
    <React.Fragment>
      <Header />
      <UsersContainer userData={userData}/>
    </ React.Fragment>
  );
}

export default App;
