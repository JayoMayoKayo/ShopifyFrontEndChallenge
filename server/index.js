//Express Server Stuff
const express = require('express');
const cors = require('cors');

//Routes
const TestDataRoute = require('./routes/testDataRoute.js');
const router = require('./routes/testDataRoute.js');
const app = express();


app.use(cors);
app.use(express.json());

router.get('/', (req,res) => {
  res.json(testData);
  console.log(testData);
})


// app.use('/test', TestDataRoute);

app.listen(8081, () => console.log("server revving up ma doode!"));