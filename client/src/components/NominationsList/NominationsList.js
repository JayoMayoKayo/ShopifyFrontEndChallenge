//React
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
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function NominationList(props) {
  const classes = useStyles();
  const nominationList = props.nominationList;
  const setNominationList = props.setNominationList;

  const stockResult = {
    "Search": [{
      "Title": "Waiting...",
      "imdbID": "Waiting...",
      "Year": "Waiting...",
      "Type": "Waiting...",
    }],
    "totalResults": "",
    "Response": ""
  };

  const nominationData = (x) => {
    if (x === '') {
      setNominationList(stockResult);
      return;
    }
    setNominationList(x);
    return (
      <>
        {x.Search.map((row) => (
          <TableRow key={row.imdbID}>
            <TableCell component="th" scope="row">{row.Title}</TableCell>
            <TableCell align="right">{row.imdbID}</TableCell>
            <TableCell align="right">{row.Year}</TableCell>
            <TableCell align="right">{row.Type}</TableCell>
            <TableCell>
              <Button variant='contained' color='primary'>
                <Typography variant='subtitle2'>Delete</Typography>
                </Button>
            </TableCell>
          </TableRow>
        ))}
      </>
    )
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
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nominationData(nominationList)}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default NominationList;