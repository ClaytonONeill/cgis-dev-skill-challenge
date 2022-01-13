// IMPORTS //
import React, { useState } from 'react';

// COMPONENTS //
import UserInfoTable from './UserInfoTable.jsx';

// MATERIAL ELEMENTS //
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';




export default function UserCardView({ userInfo, classes }) {

  // TRACK PAGE VIEWS //
  const [clickCount, setClickCount] = useState(0);

  // HANDLE APP VIEW //
  const [view, setView] = useState(false);

  // FUNTION TO HANDLE CLICK INCREMENT AND MANAGE VIEW //
  const handleView = () => {
    if (view == false)  {
      setClickCount(clickCount + 1);
      setView(true)
    }
    else {
      setView(false)
    }
  };

  let userInfoKeys = Object.keys(userInfo);
  let userInfoValues = Object.values(userInfo);


  return (
    <React.Fragment>
    {!view ?
    <Card style={{margin: 5, padding: 10}}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Username: {userInfo.login}
        </Typography>
        <Typography variant='h6'>
          User ID: {userInfo.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleView()}> Show Details </Button>
      </CardActions>
    </Card>
    :
    <Card style={{ margin: 5 }} >
      <Button style={{ margin: '5px' }}onClick={() => handleView()}>Go Back</Button>
        <CardMedia
          alt={userInfo.login}
          component='img'
          height='400'
          image={userInfo.avatar_url}
        />
        <CardContent>
          <Typography variant='h4' component='div'>
            Github user: {userInfo.login}
          </Typography>
          <Typography variant='h6'>
            Profile Views {clickCount}
          </Typography>
            <div
              style={{
                borderTop: '1px solid grey',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                paddingTop: '5px'}}>
              <span>User ID: {userInfo.id}</span>
              <span>Node ID: {userInfo.node_id}</span>
            </div>
          <Typography>
          </Typography>
          <Typography>
          </Typography>
          <UserInfoTable
            userInfoKeys={userInfoKeys}
            userInfoValues={userInfoValues}
          />
        </CardContent>
      </Card>
  }
  </ React.Fragment>
  );
}
