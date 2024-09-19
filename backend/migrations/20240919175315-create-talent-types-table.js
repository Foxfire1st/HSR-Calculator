'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the TALENT_TYPES table
    await queryInterface.createTable('TALENT_TYPES', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      talent_type: {
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
    // Drop the TALENT_TYPES table
    await queryInterface.dropTable('TALENT_TYPES');
  }
};
