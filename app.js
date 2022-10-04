const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json('Welcome to express home page');
});



app.listen(process.env.port || 8000, console.log('listening on port 8000'));
