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

function SearchResultsList({ movieSearch }) {
  const classes = useStyles();
  const resultList = movieSearch;
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <TableContainer component={Container} disableGutters={true}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Movie Name{resultList && console.log(resultList.Search)}</TableCell>
                <TableCell align="right">IMBD Number</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultList && resultList.Search.map((row) => (
                <TableRow key={row.Title}>
                  <TableCell component="th" scope="row">{row.Title}</TableCell>
                  <TableCell align="right">{row.imdbID}</TableCell>
                  <TableCell align="right">{row.Year}</TableCell>
                  <TableCell align="right">{row.Type}</TableCell>
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