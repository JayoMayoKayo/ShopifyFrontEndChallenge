//Express Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const { response } = require("express");

const OMDbApi = 'http://www.omdbapi.com/?apikey=9f463311&t=';
const OMDbApiTest = 'http://www.omdbapi.com/?apikey=9f463311&t=up';


//Movie Search 
router.get('/', (serverReq, serverRes) => {
  axios.get(OMDbApiTest)
  .then(response => {
    console.log(response.data.Title);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("You F up Fool!");
  })
})

module.exports = router;