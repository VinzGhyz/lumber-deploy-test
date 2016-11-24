'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('spots', {
    name: {
      type: DataTypes.STRING,
    },
    windfinder_id: {
      type: DataTypes.STRING,
    },
    direction_min: {
      type: DataTypes.INTEGER,
    },
    direction_max: {
      type: DataTypes.INTEGER,
    },
    lat: {
      type: DataTypes.DOUBLE,
    },
    lon: {
      type: DataTypes.DOUBLE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'spots',
    underscored: true,
    
  });

  return Model;
};

