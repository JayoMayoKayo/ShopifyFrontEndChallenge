import React, { useState, useEffect }from 'react';

//Axios Api Promises
import axios from 'axios';

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
  titleMargin: {
    marginTop: '40px'
  },
  paperMargin: {
    marginTop: '20px',
    marginBottom: '20px',
  }
});

function HomePage() {
  //State
  const [movieSearchResults, setMovieSearchResults] = useState({
    "Search": [{
      "Title": "Waiting...",
      "imdbID": "Waiting...",
      "Year": "Waiting...",
      "Type": "Waiting...",
    }],
    "totalResults": "",
    "Response": ""
  });
  const [movieName, setMovieName] =useState("ram");

  const errorResult = {
    "Search": [{
      "Title": "There is no movie like that :(",
      "imdbID": "Waiting...",
      "Year": "Waiting...",
      "Type": "Waiting...",
    }],
    "totalResults": "",
    "Response": "False"
  }

  //ComponentDidUpdate the default movie shown when going to the page
  useEffect(() => {
    axios
      .get(`http://localhost:8081/defaultmoviesearch`)
      .then(response => {
        setMovieSearchResults(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  //Axios Search Request
  const movieNameSearch = (x) => {
    axios.get(`http://localhost:8081/moviesearch/${x}`)
    .then((response) => {
      if (response.data.Response === "False") {
        setMovieSearchResults(errorResult);
        return;
      }
      setMovieSearchResults(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  };

  //Material UI Styling
  const classes = useStyles();

  return (
    <>
      <Grid container direction='column'>
        <Grid item xs={12} className={classes.titleMargin}><Typography variant='h4'>The Shoppies</Typography></Grid>
        <Grid item xs={12} className={classes.paperMargin}>
          <Paper>
            <SearchBar 
              movieNameSearch={movieNameSearch}
              movieSearchResults = {movieSearchResults} 
              setMovieSearchResults={setMovieSearchResults}
              movieName={movieName}
              setMovieName={setMovieName} 
              />
          </Paper>
        </Grid>
        <Grid item xs={12} container direction="row" className={classes.paperMargin} spacing={3}>
          <Grid item xs>
            <Paper>
              <SearchResults 
                movieName={movieName}
                setMovieSearchResults = {setMovieSearchResults} 
                movieSearchResults={movieSearchResults} 
              />
            </Paper>
          </Grid>
          <Grid item xs><Paper><Nominations /></Paper></Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default HomePage;