'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            product.belongsTo(models.category, {
                foreignKey: 'categoryId',
            });
            product.hasMany(models.product_image, {
                foreignKey: 'product_image_id',
                as: 'product_image_id',
            });
            // define association here
        }
    }
    product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'product',
        }
    );
    return product;
};
