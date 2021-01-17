//React
import React from 'react';

//Axios Api Promises
import axios from 'axios';

import debounce, { result } from 'lodash';

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

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function SearchResultsList(props) {
  const classes = useStyles();
  
  const resultList = props.movieSearchResults;
  const movieName = props.movieName;
  const setMovieSearchResults = props.setMovieSearchResults;
  
  const testFunction = (x) => {
    console.log(resultList.Search);
    return (
      <>
        {resultList.Search.map((row) => (
          <TableRow key={row.imdbID}>
            <TableCell component="th" scope="row">{row.Title}</TableCell>
            <TableCell align="right">{row.imdbID}</TableCell>
            <TableCell align="right">{row.Year}</TableCell>
            <TableCell align="right">{row.Type}</TableCell>
          </TableRow>
        ))}
      </>
    );
  };


  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <TableContainer component={Container} disableGutters={true}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Movie Name</TableCell>
                <TableCell align="right">IMBD Number</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
{/*               {resultList.Search.map((row) => (
                <TableRow key={row.Title}>
                  <TableCell component="th" scope="row">{row.Title}</TableCell>
                  <TableCell align="right">{row.imdbID}</TableCell>
                  <TableCell align="right">{row.Year}</TableCell>
                  <TableCell align="right">{row.Type}</TableCell>
                </TableRow>
              ))} */}
              {testFunction(resultList)}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default SearchResultsList;