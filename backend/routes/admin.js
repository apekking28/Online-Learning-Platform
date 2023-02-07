const { Router } = require("express");
const route = Router();
const userController = require("../controllers/user");
const adminController = require("../controllers/admin");
const auth = require("../middlewares/auth");

// admin route

// get all data user and course
route.get(
  "/api/course/user/getAllUserAndCourse",
  auth,
  adminController.getAllUserAndCourse
);

// add new course
route.post("/api/course/add", auth, adminController.addCourse);

// update course
route.put("/api/course/update/:id", auth, adminController.update);

// delete soft course
route.post(
  "/api/course/deleteSoft/:id",
  auth,
  adminController.deleteSoftCourse
);

// delete soft user
route.post("/api/user/deleteSoft/:id", auth, adminController.deleteSoftStaff);

module.exports = route;
