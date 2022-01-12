// IMPORTS //
import React from 'react';

// MATERIAL ELEMENTS //
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function AllUsersCardView({ user, classes, showOneUser }) {
  return (
    <Card className={classes.allUsersCardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Username: {user.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User id: {user.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => showOneUser(user.id)}>View Profile</Button>
      </CardActions>
    </Card>
  );
}
