const Product = require("../models/product");
const slugify = require("slugify");

// testing
// import fs from "fs";
// import product from "../models/product";

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
  // testing image
  // let fields = req.fields;
  // let files = req.files;
  // let testProduct = new Product(fields);
  // if (files.images) {
  //   product.image.data = fs.readFileSync(files.image.path);
  //   product.image.contentType = files.image.type;
  // }
  // test to here
};

exports.read = async (req, res) => {
  let products = await Product.find({});
  res.json(products);
};
