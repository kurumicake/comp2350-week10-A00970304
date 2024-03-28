'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add altering commands here.
    // For example:
    await queryInterface.createTable('users', {
      users_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      full_name: {
        type: Sequelize.STRING
      }
      // Add other columns here as needed.
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // For example:
    await queryInterface.dropTable('users');
  }
};

