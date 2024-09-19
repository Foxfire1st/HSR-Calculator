'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the PATHS table
    await queryInterface.createTable('PATHS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });

    // Insert initial data
    await queryInterface.bulkInsert('PATHS', [
      { path: 'The Abundance', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Destruction', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Erudition', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Harmony', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Hunt', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Nihility', createdAt: new Date(), updatedAt: new Date() },
      { path: 'The Preservation', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the PATHS table
    await queryInterface.dropTable('PATHS');
  }
};
