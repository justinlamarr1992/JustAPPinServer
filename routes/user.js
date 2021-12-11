const express = require("express");
const router = express.Router();
// routes;
router.get("/user", (req, res) => {
  res.json({
    data: "test 1,2,3",
  });
});
module.exports = router;
