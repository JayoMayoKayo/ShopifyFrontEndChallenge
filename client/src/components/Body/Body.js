import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';


//Components
import SearchBar from '../SearchBar/SearchBar';
import Nominations from '../Nominations/Nominations';
import SearchResults from '../SearchResults/SearchResults';

const useStyles = makeStyles({

});

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction='column'>
        <Grid item xs={12}><Typography variant='h4'>The Shoppies</Typography></Grid>
        <Grid item xs={12}><Paper><SearchBar></SearchBar></Paper></Grid>
        <Grid item xs={12} container direction="row">
          <Grid item xs><Paper><Nominations></Nominations></Paper></Grid>
          <Grid item xs><Paper><SearchResults></SearchResults></Paper></Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default HomePage;