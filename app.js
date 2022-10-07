const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use(bodyParser.json());

var whitelist = ['http://localhost', 'http://abc.com'];

var corsObjects = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(null, false);
		}
	},
	Credentials: true,
};

app.use(cors(corsObjects));

app.get('/', (req, res) => {
	res.json('Welcome to express home page');
});

const productsRouter = require('./routes/products');

app.use('/api/products', productsRouter);

app.listen(process.env.port || 8000, console.log('listening on port 8000'));
