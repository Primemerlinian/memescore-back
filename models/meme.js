'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    
    static associate(models) {
      Meme.belongsTo(models.Profile, { foreignKey: 'profileId' });
    }
  }

  Meme.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    photo: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Meme'
  });

  return Meme;
};
