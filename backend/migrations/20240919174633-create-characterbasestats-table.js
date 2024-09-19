'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the CHARACTERBASESTATS table
    await queryInterface.createTable('CHARACTERBASESTATS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_path: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PATHS', // References the PATHS table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TYPES', // References the TYPES table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      atk_base: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      hp_base: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      def_base: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      atk_growth: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      hp_growth: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      def_growth: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      energy: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      taunt: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      splash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      basic_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      skill_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ultimate_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      talent_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      technique_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enhanced1_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enhanced2_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trace1_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trace2_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trace3_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      e1_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      e2_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      e4_icon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      e6_icon: {
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
    // Drop the CHARACTERBASESTATS table
    await queryInterface.dropTable('CHARACTERBASESTATS');
  }
};
