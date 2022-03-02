const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controller
const { create, remove, list } = require("../controllers/discount");

// routes
router.post("/discount", authCheck, adminCheck, create);
router.get("/discounts", list);
router.delete("/discount/:discountId", authCheck, adminCheck, remove);

module.exports = router;
