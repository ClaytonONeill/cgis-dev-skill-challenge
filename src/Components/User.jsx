// IMPORTS //
import React from 'react';

// MATERIAL ELEMENTS //
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function User({ user, classes }) {
  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Username: {user.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User id: {user.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}
