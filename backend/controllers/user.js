const User = require("../models/user");
const Course = require("../models/course");

const userController = {
  getAllCourse: async (req, res) => {
    try {
      const findAllCourse = await Course.find();

      res.status(200).json({
        msg: "Succsefully get all course",
        totals: findAllCourse.length,
        data: findAllCourse,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getCategoryCourse: async (req, res) => {
    try {
      const findCategoryCourse = await Course.find({
        category: req.params.category,
      });

      res.status(200).json({
        msg: "Succsefully get course category",
        totals: findCategoryCourse.length,
        data: findCategoryCourse,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getDetailCourse: async (req, res) => {
    try {
      const detailCourse = await Course.findOne({
        _id: req.params.id,
      });

      res.status(200).json({
        msg: "Succsefully get detail course",
        data: detailCourse,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  seacrhCourse: async (req, res) => {
    try {
      const courses = await Course.aggregate([
        {
          $sort: {
            price: -1,
          },
        },
        {
          $sort: {
            price: 1,
          },
        },
      ]);
      res.status(200).json({
        msg: "Succsefully get course category",
        totals: courses.length,
        data: courses,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController;
