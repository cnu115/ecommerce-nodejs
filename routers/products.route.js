const express = require('express');
const router = express.Router();
const { viewProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/ProductController');
const validate = require('../middlewares/validate');
const { create, update, deleteVali } = require('../validations/product.validate');

router.get('/', viewProducts);
router.post('/', validate(create), createProduct);
router.put('/:id', validate(update), updateProduct);
router.delete('/:id', validate(deleteVali), deleteProduct);


module.exports = router;