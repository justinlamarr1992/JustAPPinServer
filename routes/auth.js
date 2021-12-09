const express = require("express");

const router = express.Router();

const { authCheck } = require("../middlewares/auth");

const { createOrUpdateUser } = require("../controllers/auth");

// routes;
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
