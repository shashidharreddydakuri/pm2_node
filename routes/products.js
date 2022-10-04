const express = require('express');

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProducts);

router.put('/', updateProducts);

router.delete('/:id', deleteProduct);

module.exports = router;
