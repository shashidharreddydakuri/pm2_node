const mongoose = require('mongoose');

const { connectMongoose } = require('../db-connect');

let schema = mongoose.Schema;

let productSchema = new mongoose.Schema({
	id: Number,
	name: String,
	Price: Number,
});
