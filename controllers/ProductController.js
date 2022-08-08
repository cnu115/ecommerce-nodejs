const httpStatus = require('http-status');
const { create, allProducts, getProduct, getProductById, updateQuantity, deleteProductById } = require('../services/product.service');

const createProduct = async (req, res) => {
    try {
        const isAlreadyExists = await getProduct(req.body.name);
        if (!isAlreadyExists) {
            await create({ ...req.body, createdBy: 1 });
            // const products = 
            return res.status(httpStatus.CREATED).send({
                message: "created successfully",
                // product: product
            })
        } else {
            return res.status(httpStatus.CONFLICT).send({
                message: "Product is already exists"
            })
        }
    } catch (error) {
        const errorMessage = error.hasOwnProperty('message') ? error.message : error;
        return res.status(httpStatus.BAD_REQUEST).send({
            error: errorMessage,
            message: 'Something went wrong'
        })
    }

}

const viewProducts = async (req, res) => {
    try {
        const products = await allProducts();
        return res.status(httpStatus.OK).send({
            products: products
        })
    } catch (error) {
        const errorMessage = error.hasOwnProperty('message') ? error.message : error;
        console.error('featching products error ' + errorMessage);
        return res.status(httpStatus.BAD_REQUEST).send({
            error: errorMessage,
            message: 'Something went wrong'
        })
    }
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    
    const product = await getProductById(id);
    if (product) {
        await updateQuantity(id, quantity);
        product['quantity'] = quantity;
        return res.status(httpStatus.OK).send({
            message: 'Updated successfully',
            product: product
        })
    } else {
        return res.status(httpStatus.NOT_FOUND).send({
            message: "Invalid Product"
        })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const product = await getProductById(id);
    if (product) {
        await deleteProductById(id);
    
        return res.status(httpStatus.OK).send({
            message: 'deleted successfully'
        })
    } else {
        return res.status(httpStatus.NOT_FOUND).send({
            message: "Invalid Product"
        })
    }
}

module.exports = {
    createProduct,
    viewProducts,
    updateProduct,
    deleteProduct
}