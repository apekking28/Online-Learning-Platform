const { Router } = require("express");
const route = Router();
const userController = require("../controllers/user");
const authUser = require("../middlewares/authUser");

// user routes

// get all courses
route.get(
  "/api/course/user/getAllCourse",
  authUser,
  userController.getAllCourse
);

// get course category
route.get(
  "/api/course/user/getCategoryCourse/:category",
  authUser,
  userController.getCategoryCourse
);

// get detail course
route.get(
  "/api/course/user/getDetailCourse/:id",
  authUser,
  userController.getDetailCourse
);

// seacrh course
route.get(
  "/api/course/user/seacrhCourse",
  authUser,
  userController.seacrhCourse
);

module.exports = route;
