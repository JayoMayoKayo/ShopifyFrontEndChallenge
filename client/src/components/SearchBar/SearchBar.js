//React
import React from 'react';
import axios from 'axios';

//LoDash Import
import { debounce } from 'lodash'; 

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  paperContainer: {
    padding: '20px',
  }
}));

function SearchBar(props) {
  const classes = useStyles();
  
  const movieNameSearch = props.movieNameSearch;
  const movieSearchResults = props.movieSearchResults;
  const setMovieSearchResults = props.setMovieSearchResults;
  const movieName = props.movieName;
  const setMovieName = props.setMovieName;

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

  const searchMovieName = debounce((nameInput) => {
    {
      if (nameInput === '') {
      setMovieSearchResults(stockResult);
      setMovieName("...");
      return;
      }
      setMovieSearchResults(stockResult);
      setMovieName(nameInput);
      movieNameSearch(nameInput);
    }
  },1000);

  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <form className={classes.root}>
          <TextField 
            id="outlined-basic" 
            label='Type in a movie or imbd number...(ram is example)' 
            variant='outlined' 
            onChange={(e) => {searchMovieName(e.target.value)}}
          />
        </form>
      </Container>
    </>
  );
}
export default SearchBar;