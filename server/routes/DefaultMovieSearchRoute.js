//Express Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const { response } = require("express");

const OMDbApi = 'http://www.omdbapi.com/?apikey=9f463311&s=ram';

//Movie Search 
router.get('/', (serverReq, serverRes) => {
  axios.get(OMDbApi)
  .then(response => {
    //console.log(response.data.Search);
    serverRes.json(response.data);
  })
  .catch(err => {
    console.log("You F up Fool!");
  })
})


module.exports = router;