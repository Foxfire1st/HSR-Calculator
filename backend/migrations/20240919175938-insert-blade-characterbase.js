'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert data into CHARACTERBASESTATS
    await queryInterface.bulkInsert('CHARACTERBASESTATS', [
      {
        name: 'Blade',
        id_path: 1,
        id_type: 7,
        atk_base: 73.92,
        hp_base: 184.8,
        def_base: 66,
        atk_growth: 3.696,
        hp_growth: 9.24,
        def_growth: 3.3,
        energy: 130,
        taunt: 125,
        icon: 'Blade',
        splash: 'Blade',
        basic_icon: 'Blade',
        skill_icon: 'Blade',
        ultimate_icon: 'Blade',
        talent_icon: 'Blade',
        technique_icon: 'Blade',
        enhanced1_icon: 'Blade',
        enhanced2_icon: 'Blade',
        trace1_icon: 'Blade',
        trace2_icon: 'Blade',
        trace3_icon: 'Blade',
        e1_icon: 'Blade',
        e2_icon: 'Blade',
        e4_icon: 'Blade',
        e6_icon: 'Blade',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the inserted data (Blade)
    await queryInterface.bulkDelete('CHARACTERBASESTATS', { name: 'Blade' }, {});
  }
};
