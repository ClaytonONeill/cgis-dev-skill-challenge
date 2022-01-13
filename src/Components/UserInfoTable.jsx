// IMPORTS //
import React from 'react';

// MATERIAL ELEMENTS //
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Typography } from '@mui/material';


export default function UserInfoTable({ userInfoKeys, userInfoValues }) {

  console.log(userInfoKeys)

  return(
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 350 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align='center'>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  )
}
