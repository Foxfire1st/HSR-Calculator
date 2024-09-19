'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the TALENTS table
    await queryInterface.createTable('TALENTS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_characterbasestats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CHARACTERBASESTATS', // References the CHARACTERBASESTATS table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_talent_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TALENT_TYPES', // References the TALENT_TYPES table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_stat_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'STAT_TYPES', // References the STAT_TYPES table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      flat_name: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      self_buff: {
        type: Sequelize.BOOLEAN,
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
    // Drop the TALENTS table
    await queryInterface.dropTable('TALENTS');
  }
};
