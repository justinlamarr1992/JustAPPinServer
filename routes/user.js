const express = require("express");
const router = express.Router();
// routes;
router.get("/user", (req, res) => {
  res.json({
    data: "This is the API node updated again",
  });
});
module.exports = router;
