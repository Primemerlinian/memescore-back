"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    static associate(models) {
      Meme.belongsTo(models.Profile, { foreignKey: "profileId" });
    }
  }

  Meme.init(
    {
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Profiles",
          key: "id",
        },
      },
      photo: {
        type: DataTypes.STRING,
      },
      caption: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Meme",
    }
  );

  return Meme;
};
