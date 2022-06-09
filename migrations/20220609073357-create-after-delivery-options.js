'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('afterDeliveryOptions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            reason: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING,
            },
            type: {
                type: Sequelize.ENUM('return', 'exchange'),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            deliveryId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'deliveries',
                    key: 'id',
                    as: 'deliveryId',
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('afterDeliveryOptions');
    },
};
