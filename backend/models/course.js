const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    isDelete: { type: Boolean, default: false },
    photo: {
      type: String,
      default: "no photo",
    },
    category: {
      type: String,
      required: [, "Please enter category"],
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

module.exports = Course;
