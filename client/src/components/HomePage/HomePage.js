import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

//Components
import Body from '../Body/Body';

const useStyles = makeStyles({
  background: {
    background: '#f4f6f8',
    width: '100vw',
    height: '100vh'
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.background} disableGutters="true" maxWidth="false">
        <Grid container direction='row'>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}><Body></Body></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Container>
    </>
  );
}
export default HomePage;