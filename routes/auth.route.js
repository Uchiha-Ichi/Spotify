const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post("/login", authController.loginAccount);

router.get('/register', (req, res) => {
    res.render('register');
});
router.post("/register", authController.registerAccount);

router.get('/logout', authController.logoutAccount);

module.exports = router;