'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ordered_items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ordered_items.belongsTo(models.order, {
                foreignKey: 'orderId',
            });
            ordered_items.belongsTo(models.product, {
                foreignKey: 'product_id',
            });
        }
    }
    ordered_items.init(
        {
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'ordered_items',
        }
    );
    return ordered_items;
};
