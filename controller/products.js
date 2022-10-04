let products = [];
const getProducts = async (req, res) => {
	res.json(products);
};

const createProducts = async (req, res) => {
	let products = {};
	product = req.body;
	products.push({ ...product });
	res.json(products);
};

const updateProducts = async (req, res) => {
	let product = {};
	product = req.body;
};

const deleteProducts = async (req, res) => {};
