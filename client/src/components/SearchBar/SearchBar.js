import React from 'react';
import axios from 'axios';


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

function SearchBar() {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <form className={classes.root}>
          <TextField id="outlined-basic" label='Type in a movie or imbd number...(ram is example)' variant='outlined'></TextField>
          <Input placeholder="placeholder"></Input>
        </form>
      </Container>
    </>
  );
}
export default SearchBar;