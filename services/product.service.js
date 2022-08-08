const sequelize = require('../models/index');
const Products = sequelize.Products;
const Users = sequelize.Users;

const create = async (data) => {
    const product = await Products.create(data);
    return product;
}

const allProducts = async () => {
    const products = await Products.findAll({
        attributes: ['id', 'name', 'quantity', 'description'],
        include: { association: 'user', attributes: ['email', 'name'] }
    });
    return products;
}
const getProduct = async (name) => {
    return Products.findOne({
        where: { name: name }
    })
}
const getProductById = async (id) => {
    return Products.findOne({
        where: { id: id },
        attributes: ['id','name','quantity','description'],
        include: { association: 'user', attributes: ['email', 'name'] }
    })
}
const updateQuantity = async (id, quantity) => {
    Products.update({
        quantity: quantity
    }, {
        where: {
            id: id
        }
    })
}

const deleteProductById = async (id) => {
    Products.destroy({
        where: {
            id: id
        }
    })
}
module.exports = {
    create,
    allProducts,
    getProduct,
    getProductById,
    updateQuantity,
    deleteProductById
}