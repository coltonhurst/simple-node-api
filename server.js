// server.js

// dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

// listen to http requests...

const port = 8000;

app.listen(port, () => {
	console.log('We are live on ' + port);
});