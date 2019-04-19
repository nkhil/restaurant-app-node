const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const a = { name: "Bob", age: 26, greet: "Hi Bob" };
  res.json(a);
});

router.get("/hello", (req, res) => {
  res.render("hello");
});

module.exports = router;
