const Profile = require("../models/profile");
const User = require("../models/user");
const slugify = require("slugify");

exports.create = async (req, res) => {
  //   try {
  //     console.log(req.body);
  //     req.body.slug = slugify(req.body.name);
  //     const newProfile = await new Profile(req.body).save();
  //     res.json(newProfile);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({ err: err.message });
  //   }
  console.log("test 12345");
};

exports.listAll = async (req, res) => {
  console.log("Listing all");
};

exports.remove = async (req, res) => {};

exports.read = async (req, res) => {};

exports.update = async (req, res) => {};

exports.list = async (req, res) => {
  //   console.table(req.body);
  //   try {
  //     const { sort, order, limit } = req.body;
  //     const profiles = await Profile.find({})
  //       .sort([[sort, order]])
  //       .limit(limit)
  //       .exec();
  //     res.json(profiles);
  //   } catch (err) {
  //     console.log(err);
  //   }
};
