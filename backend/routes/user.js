const { Router } = require("express");
const route = Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

// user

// get all courses
route.get("/api/course/user/getAllCourse", userController.getAllCourse);

// get course category
route.get(
  "/api/course/user/getCategoryCourse/:category",
  userController.getCategoryCourse
);

// get detail course
route.get(
  "/api/course/user/getDetailCourse/:id",
  userController.getDetailCourse
);

// seacrh course
route.get("/api/course/user/seacrhCourse", userController.seacrhCourse);

module.exports = route;
