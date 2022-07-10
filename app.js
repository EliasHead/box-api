const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { estrategiasAutenticacao } = require('./src/users');
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
  max: 60,
  windowMs: 1 * 60 * 1000
})

app.use(limiter);
 
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

module.exports = app;