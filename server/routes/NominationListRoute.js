//Express Stuff
const express = require("express");
const router = express.Router();
const { response } = require("express");
const uuid = require("uuid");
const nominationsData = require('../nominationsData/nominationsData.js');

router.get('/', (serverReq, serverRes) => {
  console.log("this is working!");
  serverRes.json(nominationsData);
});

router.post('/', (serverReq, serverRes) => {
  serverRes.send(serverReq.body);
  const newNomination = {
    "Title": serverReq.body.Title,
    "Year": serverReq.body.Year,
    "imdbID": serverReq.body.imdbID,
    "Type": serverReq.body.Type,
    "Poster": serverReq.body.Poster,
  };
  nominationsData.Search.push(newNomination); 
});


module.exports = router;