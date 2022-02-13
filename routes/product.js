const express = require("express");
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
  productStar,
} = require("../controllers/product");

// routes;
router.get("/products/total", productsCount);
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);
router.post("/products", list);
// rating
router.put("/product/star/:productId", authCheck, productStar);

module.exports = router;
