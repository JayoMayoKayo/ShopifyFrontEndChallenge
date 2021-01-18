import React from 'react';

//Material Ui Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

//Components
import NominationsList from '../NominationsList/NominationsList.js';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: '20px',
  }
}));

function Nominations(props) {
  const nominationList = props.nominationList;
  const setNominationList = props.setNominationList;
  const classes = useStyles();
  return (
    <>
      <Container disableGutters='true' maxWidth='false' className={classes.paperContainer}>
        <Typography variant="h4">Nominations</Typography>
        <NominationsList 
          nominationList={nominationList}
          setNominationList={setNominationList}  
        ></NominationsList>
      </Container>
    </>
  );
}
export default Nominations;