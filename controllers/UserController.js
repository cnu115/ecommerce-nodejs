
const httpStatus = require('http-status');
const sequelize = require('../models/index');
const User = sequelize.User;
const view = async (req, res) => {
    const users = await User.findAll();
    return res.status(httpStatus.OK).send({
        users: users
    })
}

module.exports = {
    view
}