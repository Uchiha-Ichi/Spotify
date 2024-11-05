const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", authController.loginAccount);

router.post("/register", authController.registerAccount);

module.exports = router;