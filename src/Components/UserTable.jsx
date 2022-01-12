// IMPORTS //
import React from 'react';

// STYLES //
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';


export default function UserTable({ userData }) {

  const rows = userData;

  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Users Table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((user, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {user.login}
              </TableCell>
              <TableCell align="right">{user.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
