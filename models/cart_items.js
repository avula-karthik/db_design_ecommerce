'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cart_items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            cart_items.hasMany(models.product, {
                foreignKey: 'productsId',
                as: 'products',
            });
        }
    }
    cart_items.init(
        {
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'cart_items',
        }
    );
    return cart_items;
};
