const express = require("express");
const router = express.Router();

let testData = require("../TestData/TestData.json");

router.get('/', (req, res) => {
  res.json(testData);
  console.log(testData);
})

module.exports = router;