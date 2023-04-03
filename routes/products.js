var express = require("express");
var router = express.Router();
const { Product } = require("../models");

/* GET users listing. */

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch {
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  const { name, image, price } = req.body;
  try {
    const product = await Product.create({
      name,
      image,
      price,
    });
    res.status(200).json(product);
  } catch {
    res.status(500);
  }
});

router.put("/", async (req, res) => {
  const { id, name, image, price } = req.body;
  try {
    const product = await Product.update(
      {
        name,
        image,
        price,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(product);
  } catch {
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
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
