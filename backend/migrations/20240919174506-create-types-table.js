'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the TYPES table
    await queryInterface.createTable('TYPES', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
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
    await queryInterface.bulkInsert('TYPES', [
      { type: 'Fire', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ice', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Imaginary', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Lightning', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Physical', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Quantum', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Wind', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the TYPES table
    await queryInterface.dropTable('TYPES');
  }
};
