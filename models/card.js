"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Card.init(
    {
      userId: DataTypes.INTEGER,
      cardNumber: DataTypes.STRING,
      cvv: DataTypes.STRING,
      expDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
