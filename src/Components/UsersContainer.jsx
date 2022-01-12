// IMPORTS //
import AllUsersCardView from './AllUsersCardView.jsx';
import React, { useState } from 'react';
import SingleUserCard from './SingleUserCard.jsx';


// MATERIAL ELEMENTS//
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

// STYLES //
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  containerStyle: {
    margin: '2em auto'
  },
  allUsersCardStyle:  {
    margin: '10px'
  },
  singleUserCardStyle:  {
    
  }
});

export default function UsersContainer({ userData }) {

  const classes = useStyles();

  let allUsers = [...userData];

  const [view, setView] = useState('many');

  const handleView = () =>  {

    view == 'many' ? setView('one') : setView('many');

  }



  return (
    <Container maxWidth='lg' className={classes.containerStyle}>
        {view == 'one'
        ?
          <SingleUserCard goBack={handleView}/>
        :
        allUsers.map((user, index) =>  (
          <AllUsersCardView key={user.id} classes={classes} user={user} showOneUser={handleView}/>
        ))}
    </ Container>
  );
}
