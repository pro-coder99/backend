const express = require("express");
const router = express.Router();
const pool = require("shared-orm-library/src/dbConnectionPostgre");

router.get("/", async (req, res) => {
  try {
    pool.query("SELECT * FROM users", (err, results) => {
      if (err) throw new Error(err);
      res.json(results.rows);
    });
    // const users = await User.find();
    // res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
