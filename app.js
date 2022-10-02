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

let products = [];

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.post('/api/products', (req, res) => {
	let product = {};
	product = req.body;
	products.push({ ...product });
	res.json(products);
});

app.put('/api/products/:id', (req, res) => {
	let product = {};
	product = req.body;
	products.map((prod, index) => {
		if (prod.id == product.id) {
			products[index] = { ...product };
		}
	});
});

app.delete('/api/products/:id', (req, res) => {
	let ID = 0;

	ID = req.params.id;
	products = products.filter((prod) => prod.id.toString() !== ID.toString());
	res.json(products);
});

app.get('/api/file/write', (req, res) => {
	let content = 'test file content';
	fs.writeFile('./test.txt', content, (err) => {
		if (err) {
			console.error(err);
			return;
		} else {
			res.json('File written successfully');
		}
	});
});

app.get('/api/file/read', (req, res) => {
	fs.readFile("./test.txt", "utf8", (err, data) => {
		if(err) {
			console.error(err);
			return;
		} else {
			res.json(data)
		}
	})
})

app.listen(process.env.port || 8000, console.log('listening on port 8000'));
