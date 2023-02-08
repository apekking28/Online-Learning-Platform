const { Router } = require("express");
const route = Router();
const userController = require("../controllers/user");
const adminController = require("../controllers/admin");
const authAdmin = require("../middlewares/authAdmin");

// admin routes

// get all data user and course
route.get(
  "/api/admin/getAllUserAndCourse",
  authAdmin,
  adminController.getAllUserAndCourse
);

// add new course
route.post("/api/admin/course/add", authAdmin, adminController.addCourse);

// update course
route.put(
  "/api/admin/course/update/:id",
  authAdmin,
  adminController.updateCourse
);

// delete soft course
route.post(
  "/api/admin/deleteSoft/course/:id",
  authAdmin,
  adminController.deleteSoftCourse
);

// delete soft user
route.post(
  "/api/admin/deleteSoft/user/:id",
  authAdmin,
  adminController.deleteSoftUser
);

module.exports = route;
