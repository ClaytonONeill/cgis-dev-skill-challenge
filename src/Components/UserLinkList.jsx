// IMPORTS //
import React from 'react';

// MATERIAL ELEMENTS //
import { Button } from '@mui/material/'
import { List } from '@mui/material/'
import { ListItem } from '@mui/material/';
import { ListItemAvatar } from '@mui/material/';
import { ListItemIcon } from '@mui/material/';
import { ListItemText } from '@mui/material/';


export default function UserLinkList({ userUrls }) {

  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'}}>
      {userUrls.map((value, index) =>  (
          <a key={value[1]} href={value[1]} style={{textDecoration: 'none'}} target='blank'>
            <Button
              key={index}
              variant='outlined'
              style={{
              width: '10em',
              margin: '3px'}}
              >{value[0] == 'html_url' ? 'My Github' : value[0].split('_')[0]}
            </Button>
          </a>
      ))}
    </div>
  )
}
