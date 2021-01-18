//Express Stuff
const express = require('express');
const cors = require('cors');

//Routes
const TestDataRoute = require('./routes/TestDataRoute.js');
const DefaultMovieSearchRoute = require('./routes/DefaultMovieSearchRoute.js');
const MovieSearchRoute = require('./routes/MovieSearchRoute.js');
const NominationListRoute = require('./routes/NominationListRoute.js');

const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

app.use(cors());
app.use(express.json());

app.use('/testdata', TestDataRoute);
app.use('/defaultmoviesearch', DefaultMovieSearchRoute);
app.use('/moviesearch', MovieSearchRoute);
app.use('/nominations', NominationListRoute);

app.listen(8081, () => console.log("server reving up ma doode"));