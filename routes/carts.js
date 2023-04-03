var express = require("express");
var router = express.Router();
const { Cart } = require("../models");

router.get("/", async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).json(carts);
  } catch {
    res.status(500);
  }
});

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.create({
      id,
    });

    res.status(200).json(cart);
  } catch {
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("DONE");
  } catch {
    res.status(500);
  }
});

module.exports = router;
