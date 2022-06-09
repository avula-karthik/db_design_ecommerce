'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class afterDeliveryOptions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            afterDeliveryOptions.belongsTo(models.delivery);
        }
    }
    afterDeliveryOptions.init(
        {
            reason: DataTypes.STRING,
            status: DataTypes.STRING,
            type: DataTypes.ENUM('return', 'exchange'),
        },
        {
            sequelize,
            modelName: 'afterDeliveryOptions',
        }
    );
    return afterDeliveryOptions;
};
