const mongoose = require('mongoose');

const connectMongoose = () => {
	mongoose
		.connect('mongodb://localhost:27017/expresstutorial', {
			useNewUrlParser: true,
		})
		.then(() => console.log('connected to mongodb'))
		.catch(() => console.error('connection to mongodb failed'));
};

module.exports = { connectMongoose };
