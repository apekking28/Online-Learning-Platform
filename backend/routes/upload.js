const route = require("express").Router();
const upload = require("../middlewares/upload");
const uploadImage = require("../middlewares/uploadImage");
const auth = require("../middlewares/auth");
const uploadController = require("../controllers/upload");

route.post(
  "/api/upload",
  uploadImage,
  upload,
  auth,
  uploadController.uploadAvatar
);

module.exports = route;
