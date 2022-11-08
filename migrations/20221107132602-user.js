'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_number: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },

      name: {
        type: Sequelize.DataTypes.STRING,
      },

      last_name: {
        type: Sequelize.DataTypes.STRING,
      },

      phone_number: {
        type: Sequelize.DataTypes.INTEGER,
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      user_detail: {
        type: Sequelize.DataTypes.TEXT,
      },

      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  },
};
