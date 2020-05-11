require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const postMessageRoutes = require('./controller/postMessageController');

var app = new express();
app.use(bodyParser.json());
app.listen(4000, () =>
  console.log('Server is Running at http://localhost:4000')
);
app.use('/postMessages', postMessageRoutes);
