'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mer_cats', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            m_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'merchants',
                    key: 'id',
                    as: 'm_id',
                },
            },
            c_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id',
                    as: 'c_id',
                },
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
        await queryInterface.dropTable('mer_cats');
    },
};
