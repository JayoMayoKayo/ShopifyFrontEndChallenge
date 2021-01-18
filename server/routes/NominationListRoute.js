//Express Stuff
const express = require("express");
const router = express.Router();
const axios = require('axios');
const { response } = require("express");
const uuid = require("uuid");
const nominationsData = require('../nominationsData/nominationsData.js');

router.get('/', (serverReq, serverRes) => {
  console.log("this is working!");
  serverRes.json(nominationsData);
})

module.exports = router;