'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('deliveries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            deliveryDate: {
                type: Sequelize.DATE,
            },
            status: {
                type: Sequelize.ENUM(
                    'delivered',
                    'processing',
                    'not_delivered'
                ),
            },
            shipping_loc: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('deliveries');
    },
};
