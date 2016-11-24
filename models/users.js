'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('users', {
    facebookId: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    password: {
      type: DataTypes.STRING,
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
    tableName: 'users',
    
    
  });

  return Model;
};

