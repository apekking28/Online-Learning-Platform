const route = require("express").Router();
const upload = require("../middlewares/upload");
const uploadImage = require("../middlewares/uploadImage");
const authAdmin = require("../middlewares/authAdmin");
const uploadController = require("../controllers/upload");

// upload image routes
route.post(
  "/api/admin/upload",
  uploadImage,
  upload,
  authAdmin,
  uploadController.uploadAvatar
);

module.exports = route;
