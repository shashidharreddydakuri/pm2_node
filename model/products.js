const { query } = require('express');
const mongoose = require('mongoose');

const { connectMongoose } = require('../db-connect');

let schema = mongoose.Schema;

let productSchema = new mongoose.Schema({
	id: Number,
	name: String,
	Price: Number,
});

let ProductModel = mongoose.model('products', productSchema);

const getProductsMongoose = async () => {
	connectMongoose();

	let products = [];
	query = {};

	try {
		products = await ProductModel.find(query, { _id: 0, _v: 0 });
	} catch (err) {}
};
