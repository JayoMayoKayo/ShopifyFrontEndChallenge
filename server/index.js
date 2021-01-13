//Express Stuff
const express = require('express');
const cors = require('cors');

//Routes
const TestDataRoute = require('./routes/TestDataRoute.js');
const MovieSearchRoute = require('./routes/MovieSearchRoute.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/testdata', TestDataRoute);
app.use('/moviesearch', MovieSearchRoute);

app.listen(8081, () => console.log("server reving up ma doode"));