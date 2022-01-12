// IMPORTS //
import React, { useState } from 'react';

// MATERIAL ELEMENTS //
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';

// STYLES //
import '../App.css';


export default function UserCardView({ userInfo, classes }) {

  const [clickCount, setClickCount] = useState(0);

  const [view, setView] = useState(false);

  const showMore = () => {
    setClickCount(clickCount + 1);
    setView(true);
  };

  const goBack = () =>  {
    setView(false);
  };

  return (
    <React.Fragment>
    {!view ?
    <Card className={classes.basicUserCardStyle}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Username: {userInfo.login}
        </Typography>
        <Typography variant='h6'>
          User ID: {userInfo.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => showMore()}> Show Details </Button>
      </CardActions>
    </Card>
    :
    <Card className='detailedUserCardStyle'>
      <Button onClick={() => goBack()}>X</Button>
        <div className='testDiv'>
          <div>
            <img className='userImage' src={userInfo.avatar_url} />
          </div>
          <div>
            <Typography variant='h2'>
              Github User {userInfo.login}
            </Typography>
            <Typography variant='h3'>
              Profile Views: {clickCount}
            </Typography>
          </div>
        </div>
    </Card>
  }
  </ React.Fragment>
  );
}
