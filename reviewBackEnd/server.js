const express = require('express');
require('dotenv').config();
const db = require('./db');

const router = require('./server/routes');

// const dotenv = require('dotenv');
// dotenv.config();
// console.log('process.env.TEST: ', process.env.TEST);

const app = express();
// to can read the body inside the req
app.use(express.json());
app.use(router);

/* 
example for test the server
const cb1 = (req, res) => {
  console.log('GET /');
  res.json('good');
};
const cb2 = (req, res) => {
  console.log('POST /');
  // req => {...., body:{  "email": "ANAS10@gmail.com"} }
  console.log('BODY:', req.body);
  res.json('good');
};
//create[POST] || read[GET] || update[PUT] || delete[DELETE]  
// request handler   HTTP Method(path, cb(req,res) )
app.get('/', cb1);
app.post('/users', cb2);
*/

const PORT = 3000;
app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));
