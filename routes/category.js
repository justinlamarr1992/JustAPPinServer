const express = require("express");

const router = express.Router();

const { authCheck } = require("../middlewares/auth");

const {
  createOrUpdateUser,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");

// routes;
router.post("");
router.post("");
router.post("");
router.post("");
router.post("");

module.exports = router;
