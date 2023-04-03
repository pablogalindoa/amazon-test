"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn("ProductCarts", "productId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "ProductCarts",
      "productcarts_ibfk_2"
    );
    await queryInterface.removeIndex("ProductCarts", "productId");
    return queryInterface.changeColumn("ProductCarts", "productId", {
      type: Sequelize.INTEGER,
    });
  },
};
