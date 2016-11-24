'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('forecasts', {
    time: {
      type: DataTypes.DATE,
    },
    clouds: {
      type: DataTypes.INTEGER,
    },
    temperature: {
      type: DataTypes.DOUBLE,
    },
    wind_speed: {
      type: DataTypes.INTEGER,
    },
    wind_direction: {
      type: DataTypes.INTEGER,
    },
    wind_gusts: {
      type: DataTypes.INTEGER,
    },
    waves_height: {
      type: DataTypes.DOUBLE,
    },
    waves_period: {
      type: DataTypes.INTEGER,
    },
    waves_direction: {
      type: DataTypes.INTEGER,
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
        Model.belongsTo(models.spots, {
          foreignKey: 'spotId',
          
          as: 'relspots',
        });
        
      }
    },
    tableName: 'forecasts',
    underscored: true,
    
  });

  return Model;
};

