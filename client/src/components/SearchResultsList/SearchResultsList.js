import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

//Components
import SearchResultsListItem from '../SearchResultsListItem/SearchResultsListItem.js';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function SearchResultsList() {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <Typography variant="h4">Search Result List</Typography>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
        <SearchResultsListItem></SearchResultsListItem>
      </Container>
    </>
  );
}
export default SearchResultsList;