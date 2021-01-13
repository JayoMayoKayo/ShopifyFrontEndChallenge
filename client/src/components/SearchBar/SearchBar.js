import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';

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

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <form className={classes.root}>
          <TextField id="outlined-basic" label='Type in a movie or imbd number...' variant='outlined'></TextField>
        </form>
      </Container>
    </>
  );
}
export default HomePage;