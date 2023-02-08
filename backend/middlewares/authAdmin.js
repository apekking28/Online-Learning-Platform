const jwt = require("jsonwebtoken");
require("dotenv").config();

const authAdmin = (req, res, next) => {
  try {
    // check ac token
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Authentication failed." });

    // validate
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Authentication failed." });
      // check role
      if (user.role === "admin") {
        next();
      } else {
        return res.status(400).json({ msg: "just admin access" });
      }
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
