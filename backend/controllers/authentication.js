const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authenticationController = {
  register: async (req, res) => {
    try {
      const { name, password, role } = req.body;

      // check fields
      if (!name || !password || !role)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // check user
      const user = await User.findOne({
        name,
      });
      //   console.log(user);
      if (user)
        return res
          .status(400)
          .json({ msg: "This name is already registered in our system." });

      // check length password
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      // hash password
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);

      // create new user
      const newUser = await User.create({
        name,
        password: hashPassword,
        role,
      });

      res.status(200).json({
        msg: "Succsefully create new user",
        data: newUser,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { name, password } = req.body;

      // check fields
      if (!name || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      //
      const user = await User.findOne({ name });
      if (!user) {
        return res.json({ error: "User not found" });
      }

      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET
        );

        if (res.status(201)) {
          return res.json({
            status: "succsefully login",
            token: token,
          });
        } else {
          return res.json({ error: "error" });
        }
      }
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authenticationController;
