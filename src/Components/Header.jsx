// IMPORTS //
import React from 'react';

// STYLES //
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }} style={{ fontStyle: 'italic' }}>
            Github Users
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
