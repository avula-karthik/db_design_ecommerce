'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mer_cat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mer_cat.hasMany(models.merchant, {
                foreignKey: 'm_id',
                as: 'm_id',
            });
            mer_cat.hasMany(models.category, {
                foreignKey: 'c_id',
                as: 'c_id',
            });
        }
    }
    mer_cat.init(
        {
            m_id: DataTypes.INTEGER,
            c_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'mer_cat',
        }
    );
    return mer_cat;
};
