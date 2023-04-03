var express = require("express");
var router = express.Router();
const { User } = require("../models");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch {
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  const { name, birth, email, pass } = req.body;
  try {
    const user = await User.create({
      name,
      birth,
      email,
      pass,
    });

    res.status(200).json(user);
  } catch {
    res.status(500);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birth, email, pass } = req.body;
  try {
    const user = User.update(
      {
        name,
        birth,
        email,
        pass,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(user);
  } catch {
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
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
