//Express Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const { response } = require("express");

const OMDbApi = 'http://www.omdbapi.com/?apikey=9f463311&s=';
const OMDbApiTest = 'http://www.omdbapi.com/?apikey=9f463311&s=rush hour';


//Movie Search Test for rush hour
router.get('/', (serverReq, serverRes) => {
  axios.get(OMDbApiTest)
  .then(response => {
    console.log(response.data.Search);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("Movie Names Test not working!");
  })
})

//Movie Search 
router.get('/:movieName', (serverReq, serverRes) => {
  const movieUrl = OMDbApi + serverReq.params.movieName;
  //console.log(serverReq.params.movieName);
  axios.get(movieUrl)
  .then((response) => {
    //console.log(response.data);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("Movie Names Search endpoint not working!")
  })
})

module.exports = router;