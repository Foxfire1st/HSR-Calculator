'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the STAT_TYPES table
    await queryInterface.createTable('STAT_TYPES', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stat_type: {
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
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the STAT_TYPES table
    await queryInterface.dropTable('STAT_TYPES');
  }
};
