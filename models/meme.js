'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    static associate(models) {
      Meme.belongsTo(models.Profile, { foreignKey: 'profileId' });
      Meme.hasMany(models.Vote, { foreignKey: 'memeId' });
    }
  }

  Meme.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Meme'
  });

  return Meme;
};
