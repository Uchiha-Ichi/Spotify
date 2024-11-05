const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");

const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken.controller");

router.get("/", verifyToken, accountController);

router.delete("/", verifyTokenAndUserAuthorization, accountController.deleteAccount);

module.exports = router;