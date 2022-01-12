// IMPORTS //
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// STYLES //
import './App.css';

function App() {

  const [userData, setUserData] = useState([]);

  useEffect( async () => {

    const results = await axios('https://api.github.com/users?per_page=10');

    setUserData(results.data);

  }, []);


  return (
    <div>

    </div>
  );
}

export default App;
