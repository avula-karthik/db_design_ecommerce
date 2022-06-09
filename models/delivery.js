'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class delivery extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            delivery.hasOne(models.ordered_items, {
                foreignKey: 'ordered_items_id',
                as: 'ordered_items_id',
            });
            delivery.hasOne(models.afterDeliveryOptions, {
                foreignKey: 'deliveryOptionsId',
                as: 'deliveryOptionsId',
            });
        }
    }
    delivery.init(
        {
            deliveryDate: DataTypes.DATE,
            status: DataTypes.ENUM('delivered', 'processing', 'not_delivered'),
            shipping_loc: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'delivery',
        }
    );
    return delivery;
};
