'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autos extends Model {
    static associate(models) {
      Autos.hasMany(models.Alquiler, { foreignKey: 'autoId' });
    }
  }

  Autos.init(
    {
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      imagen: DataTypes.STRING,
      valorAlquiler: DataTypes.FLOAT,
      anio: DataTypes.STRING,
      disponibilidad: {
        type: DataTypes.BOOLEAN, // ✅ AHORA ES BOOLEAN
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Autos',
      tableName: 'autos',
    }
  );

  return Autos;
};
