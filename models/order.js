'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            order.belongsTo(models.user);
            order.belongsTo(models.user_address);
            order.belongsTo(models.payment);
            order.hasMany(models.ordered_items, {
                foreignKey: 'order_items_id',
                as: 'order_items_id',
            });
        }
    }
    order.init(
        {
            status: DataTypes.ENUM('success', 'failed', 'processing'),
            total: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'order',
        }
    );
    return order;
};
