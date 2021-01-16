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
  const setMovieName = props.setMovieName;
  const movieNameSearch = props.movieNameSearch;

  const changeMovieName = debounce((inputValue) => {
    setMovieName(inputValue);
  },1000);

  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <form className={classes.root}>
          <TextField 
            id="outlined-basic" 
            label='Type in a movie or imbd number...(ram is example)' 
            variant='outlined' 
            onChange={(e) => {changeMovieName(e.target.value)}}
          />
        </form>
      </Container>
    </>
  );
}
export default SearchBar;