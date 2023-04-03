"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn("ProductCarts", "cartId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Carts",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "ProductCarts",
      "productcarts_ibfk_1"
    );
    await queryInterface.removeIndex("ProductCarts", "cartId");
    return queryInterface.changeColumn("ProductCarts", "cartId", {
      type: Sequelize.INTEGER,
    });
  },
};
