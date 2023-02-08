const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const authenticationRoutes = require("./routes/authentication");
const upload = require("./routes/upload");

// connect to mongo atlas
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("db connected");

    const PORT = 8000;
    app.listen(PORT, () => {
      console.log("server is active...");
    });
  }
);

// middlewares
app.use(express.json());
express.urlencoded({ extended: true });
app.use("/uploads", express.static("uploads"));

// route
app.use(authenticationRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(upload);
