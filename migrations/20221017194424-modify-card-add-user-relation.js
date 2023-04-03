"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn("Cards", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Cards", "cards_ibfk_1");
    await queryInterface.removeIndex("Cards", "userId");
    return queryInterface.changeColumn("Cards", "userId", {
      type: Sequelize.INTEGER,
    });
  },
};
