'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM('success', 'failed', 'processing'),
            },
            total: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            trans_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'payments',
                    key: 'id',
                    as: 'trans_id',
                },
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'user_id',
                },
            },
            user_address_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user_addresses',
                    key: 'id',
                    as: 'user_address_id',
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    },
};
