//Create web server
//import express from 'express';
//import path from 'path';
//import open from 'open';
//import compression from 'compression';
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;
const app = express();

//Use compression
app.use(compression());
//Serve static files
app.use(express.static('dist'));

//Get data from server
app.get('/users', function(req, res){
  //Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email":"




