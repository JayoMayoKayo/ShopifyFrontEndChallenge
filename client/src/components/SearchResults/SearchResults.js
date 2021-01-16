import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

//Components
import SearchResultsList from '../SearchResultsList/SearchResultsList.js';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function SearchResults({ movieSearch }) {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <Typography variant="h4">Search Results{console.log(movieSearch)}</Typography>
        <SearchResultsList movieSearch={movieSearch}></SearchResultsList>
      </Container>
    </>
  );
}
export default SearchResults; 