// IMPORTS //
import React, { useState } from 'react';

// COMPONENTS //
import UserLinkList from './UserLinkList.jsx';

// MATERIAL ELEMENTS //
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';
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

  // FILTER FOR ONLY VALID URLS TO PASS TO USERLINKLIST //
  let userUrls = Object.entries(userInfo).filter((value) =>  {
    return value[1] !== '' && value[0].includes('url')
  });


  return (
    <React.Fragment>
    {!view ?
    <Card style={{margin: 5, padding: 10}}>
      <CardContent>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'}}>
          <div>
            <Typography gutterBottom variant='h5' component='div'>
              Username: {userInfo.login}
            </Typography>
            <Typography variant='h6' align='left'>
              User ID: {userInfo.id}
            </Typography>
          </div>
          <div>
            <Grid>
              <Avatar
                style={{backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)}} // SOURCE "https://css-tricks.com/randomcolor/"
                sx={{height: '3.5em', width: '3.5em'}}
                variant='square'>
                {userInfo.login[0].toUpperCase()}
              </Avatar>
            </Grid>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button align='bottom' onClick={() => handleView()}> Show Details </Button>
      </CardActions>
    </Card>
    :
    <Card style={{ margin: 5 }} >
      <Button style={{ margin: '5px' }}onClick={() => handleView()}>Go Back</Button>
        <Grid item xs={12} sm={6} md={5} lg={4.8} xl={4}>
          <CardMedia
            alt={userInfo.login}
            component='img'
            image={userInfo.avatar_url}
            style={{
              height: '20em',
            }}
          />
        </Grid>
        <CardContent>
          <Typography variant='h5' component='div'>
            Github user: {userInfo.login}
          </Typography>
          <Typography variant='h6'>
            Profile Views: {clickCount}
          </Typography>
            <div
              style={{
                borderTop: '1px solid grey',
                borderLeft: '1px solid grey',
                borderRight: '1px solid grey',
                display: 'flex',
                fontWeight: 'bold',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '5px'}}>
              <span>User ID: {userInfo.id}</span>
              <span>Node ID: {userInfo.node_id}</span>
            </div>
            <h4 style={{marginLeft: '10px'}}>Links to user data:</h4>
          <UserLinkList
            userUrls={userUrls}
          />
          <div style={{
            borderTop: '1px solid grey',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10px',
            padding: '3px'
            }}>
            <Typography variant='subtitle1'>
              User type: {userInfo.type}
            </ Typography>
            <Typography variant='subtitle1'>
              Site Admin: {!userInfo.admin ? 'False' : 'True'}
            </ Typography>
          </div>
        </CardContent>
      </Card>
    }
  </ React.Fragment>
  );
}
