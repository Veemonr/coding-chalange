'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: "Cars",
          key: "id"
        },
        allowNull: false
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      pickup_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dropoff_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      pickup_location: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      dropoff_location: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};