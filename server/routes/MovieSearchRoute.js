//Express Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const { response } = require("express");

const OMDbApi = 'http://www.omdbapi.com/?apikey=9f463311&s=';
const OMDbApiTest = 'http://www.omdbapi.com/?apikey=9f463311&s=rush hour';


//Movie Search 
router.get('/', (serverReq, serverRes) => {
  console.log(serverRes.params);
  axios.get(OMDbApiTest)
  .then(response => {
    console.log(response.data.Search);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("You F up Foolio boolio!");
  })
})

module.exports = router;