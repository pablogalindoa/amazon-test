var express = require("express");
var router = express.Router();
const { Card } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch {
    res.status(500);
  }
});

router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { cardNumber, cvv, expDate } = req.body;
  try {
    const card = await Card.create({
      userId,
      cardNumber,
      cvv,
      expDate,
    });

    res.status(200).json(card);
  } catch {
    res.status(500);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { cardNumber, cvv, expDate } = req.body;
  try {
    const card = Card.update(
      {
        cardNumber,
        cvv,
        expDate,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(card);
  } catch {
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Card.destroy({
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
