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

app.get('/', (req, res) => {
	res.json('Welcome to express home page');
});

let products = [];

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.post('/api/products', (req, res) => {
	let product = {};
	product = req.body;
	products.push(...product);
	res.json(products);
});

app.put('/api/products/:id', (req, res)=> {
	let product = {};
	product = req.body;
	products.map((prod, index) => {
		if(prod.id == product.id) {
			products[index] = { ...product }
		}
	})
})

app.listen(process.env.port || 8000, console.log('listening on port 8000'));
