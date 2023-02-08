const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authenticationController = {
  register: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      // check fields
      if (!name || !password || !role || !email)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // check user duplicate
      const user = await User.findOne({
        email,
      });

      if (user)
        return res
          .status(400)
          .json({ msg: "This email is already registered in our system." });

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
        email,
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
      const { email, password } = req.body;

      // check fields
      if (!email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      //
      const user = await User.findOne({ email });
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
