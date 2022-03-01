express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
  create,
  listAll,
  //   remove,
  //   read,
  //   update,
  //   list,
} = require("../controllers/profile");

// profile
router.post("profile", authCheck, adminCheck, create);
router.get("profiles", listAll);
// router.delete("/profile/:slug", authCheck, adminCheck, remove);
// router.get("/profile/:slug", read);
// router.put("/profile/:slug", authCheck, update);
// router.post("/profiles", list);

module.exports = router;
