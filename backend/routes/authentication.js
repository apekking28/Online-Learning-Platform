const { Router } = require("express");
const route = Router();
const authenticationController = require("../controllers/authentication");

// authentcation routes

// sign in
route.post("/api/auth/register", authenticationController.register);

// login
route.post("/api/auth/login", authenticationController.login);

module.exports = route;
