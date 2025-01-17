const express = require('express');

const router = express.Router();

const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const { allowedRoles } = require('../middlewares/acl');
const { guard } = require('../middlewares/guard');

router.get('/', guard, allowedRoles('admin', 'user'), getProducts);
router.post('/', guard, allowedRoles('admin'), createProduct);
router.patch('/:id', guard, allowedRoles('admin'), updateProduct);
router.delete('/', guard, allowedRoles('admin'), deleteProduct);

module.exports = router;