'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('autos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      marca: {
        type: Sequelize.STRING,
      },
      modelo: {
        type: Sequelize.STRING,
      },
      imagen: {
        type: Sequelize.STRING,
      },
      valorAlquiler: {
        type: Sequelize.FLOAT,
      },
      anio: {
        type: Sequelize.STRING,
      },
      disponibilidad: {
        type: Sequelize.BOOLEAN, // ✅ AHORA ES BOOLEAN
        allowNull: false,
        defaultValue: true, // ✅ true en lugar de 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Autos');
  },
};

