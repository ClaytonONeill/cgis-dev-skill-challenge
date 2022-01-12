// IMPORTS //
import React, { useState } from 'react';
import UserCardView from './UserCardView.jsx';

// MATERIAL ELEMENTS//
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

// STYLES //
import { makeStyles } from '@material-ui/styles';


// BASIC STYLING DEFINED HERE //
const useStyles = makeStyles({
  containerStyle: {
    borderRadius: '5px',
    margin: '2em auto',
    padding: '10px',
  },
  basicUserCardStyle:  {
    '&:hover':  {
      boxShadow: '1px 4px 5px lightblue',
      cursor: 'pointer',
      transition: '0.5s'
    },
    margin: '10px',
    padding: '10px'
  },
});

export default function UsersContainer({ userData }) {

  const classes = useStyles();

  let allUsers = [...userData];

  return (
    <Container maxWidth='lg' className={classes.containerStyle}>
        {allUsers.map((user, index) =>  (
          <UserCardView
            classes={classes}
            key={index}
            userInfo={user}
           />
        ))}
    </ Container>
  );
}
