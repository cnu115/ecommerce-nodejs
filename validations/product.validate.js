const Joi = require('joi');

const create = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        quantity: Joi.number().required(),
    }),
};

const update = {
    params: Joi.object().keys({
        id: Joi.number().required(),
    }),
    body: Joi.object().keys({
        quantity: Joi.number().required(),
    })
};
const deleteVali = {
    params: Joi.object().keys({
        id: Joi.number().required(),
    })
};

module.exports = {
    create,
    update,
    deleteVali
}