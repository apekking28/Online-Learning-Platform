const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your passsword"],
      min: 6,
    },
    role: { type: String, require: [true, "Please enter your role"] },
    isDelete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
