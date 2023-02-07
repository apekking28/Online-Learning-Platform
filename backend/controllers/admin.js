const { findOneAndUpdate } = require("../models/course");
const Course = require("../models/course");
const User = require("../models/user");

const adminController = {
  getAllUserAndCourse: async (req, res) => {
    try {
      // find all User
      const users = await User.find({});

      // find all Course
      const courses = await Course.find({});

      // find totals free course
      let freeCourse = 0;
      let paidCourse = 0;
      for (const course of courses) {
        if (course.price.toLowerCase() === "Free".toLowerCase()) {
          freeCourse++;
        } else {
          paidCourse++;
        }
      }

      res.status(200).json({
        msg: "Succsefully get data user and course",
        userCount: users.length,
        courseCount: courses.length,
        freeCourse: freeCourse,
        paidCourse: paidCourse,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  addCourse: async (req, res) => {
    try {
      const { title, price, photo, category } = req.body;

      // check fields
      if (!title || !price || !category)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // check course
      const course = await Course.findOne({
        title,
      });
      //   console.log(course);
      if (course)
        return res
          .status(400)
          .json({ msg: "This title is already registered in our system." });

      // create new course
      const newCourse = await Course.create({
        title,
        price,
        photo,
        category,
      });

      res.status(200).json({
        msg: "Succsefully create new course",
        data: newCourse,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const { title, price } = req.body;

      const course = await Course.findOne({ title, isDelete: false });
      console.log(course);
      if (course)
        return res
          .status(400)
          .json({ msg: "This title is already registered in our system." });

      await Course.updateOne(
        { _id: req.params.id },
        { $set: req.body, updatedAt: new Date() }
      );

      res.status(200).json({
        msg: "Succsefully update course",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteSoftCourse: async (req, res) => {
    try {
      const course = await Course.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            isDelete: true,
            updatedAt: new Date(),
          },
        }
      );
      res.status(200).json({
        msg: "Succsesfully deletedsofly course",
        courseId: course._id,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteSoftStaff: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            isDelete: true,
            updatedAt: new Date(),
          },
        }
      );
      res
        .status(200)
        .json({ msg: "Succsesfully deletedsofly user", userId: user._id });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = adminController;
