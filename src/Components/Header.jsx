// IMPORTS //
import React from 'react';
import { GoMarkGithub} from 'react-icons/go';

// STYLES //
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{background: 'rgba(0,0,0, 0.7)'}}>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }} style={{ marginTop: '6px'}} >
            <GoMarkGithub/>
          </Typography>
          <Typography variant='h6' style={{ color: 'white' }} >
            Github user dashboard.
            <Typography align='center' style={{fontStyle: 'italic'}} >
               Find your next dev!
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
