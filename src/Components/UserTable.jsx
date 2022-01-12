// IMPORTS //
import React from 'react';
import User from './User.jsx';

// MATERIAL ELEMENTS//
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

// STYLES //
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  containerStyle: {
    margin: '2em auto'
  },
  cardStyle:  {
    margin: '10px'
  }
})

export default function UserTable({ userData }) {

  const classes = useStyles();

  let rows = userData;

  return (
    <Container maxWidth='lg' className={classes.containerStyle}>
        {rows.map((user, index) =>  (
          <User key={index} classes={classes} user={user} />
        ))}
    </ Container>
  );
}
