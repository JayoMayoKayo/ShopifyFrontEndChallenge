import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';

//Components
import SearchResultsListItem from '../SearchResultsListItem/SearchResultsListItem.js';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

function SearchResultsList() {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <TableContainer component={Container} disableGutters={true}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>IMBD Number</TableCell>
                <TableCell align="right">IMBD Number</TableCell>
                <TableCell align="right">IMBD Number</TableCell>
                <TableCell align="right">IMBD Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default SearchResultsList;