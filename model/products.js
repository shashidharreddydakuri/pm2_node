const { query, response } = require('express');
const mongoose = require('mongoose');

const { connectMongoose } = require('../db-connect');

let schema = mongoose.Schema;

let productSchema = new mongoose.Schema({
	id: Number,
	name: String,
	price: Number,
});

let ProductModel = mongoose.model('products', productSchema);

const getProductsMongoose = async () => {
	connectMongoose();

	let products = [];
	let query = {};

	try {
		products = await ProductModel.find(query, { _id: 0, _v: 0 });
	} catch (err) {
		products = [];
	}
	return products;
};

const createProductsMongoose = async (product) => {
	connectMongoose();
	let query = { id: product.id, name: product.name, price: product.price };
	let response = '';
	const doc = new ProductModel(query);
	try {
		await doc.save();
		response = 'Product inserted successfully';
	} catch (err) {
		console.log(err);
		response = 'product insertion failed';
	}

	return response;
};

const updateProductsMongoose = async (product) => {
	connectMongoose();
	const filter = { id: product.id };
	const update = { name: product.name, price: product.price };

	let response = '';
	let doc = await ProductModel.findOneAndUpdate(filter, update, {
		new: true,
		rawResult: true,
	});
	try {
		if (doc.lastErrorObject.updatedExisting == true) {
			response = 'Updated products Record';
		} else {
			response = 'Product updating Failed';
		}
	} catch (err) {
		response = 'Product Updating Failed';
	}
	return response;
};

const deleteProductsMongoose = async (ID) => {
	connectMongoose();
	let query = { id: ID };
	let response = '';
	let deletedRecord = await ProductModel.deleteOne(query);
	if (deletedRecord.deletedCount && deletedRecord.deletedCount > 0) {
		response = 'deleted product successfully';
	} else {
		response = 'product deletion failed';
	}
	return response;
};

module.exports = {
	getProductsMongoose,
	createProductsMongoose,
	updateProductsMongoose,
	deleteProductsMongoose,
};
