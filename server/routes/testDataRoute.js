//Express Required Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');

let testData = require("../testData/testData.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
  res.end("Hello Worl!");
})

module.exports = router;