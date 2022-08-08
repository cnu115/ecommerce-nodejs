'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {  foreignKey: "createdBy",as: 'user' }); 
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    createdBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // 'users' refers to table name
        key: 'id', // 'id' refers to column name in users table
      }
    },
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};