const { Accounts } = require("../models/Accounts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
    registerAccount: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newAccount = await new Accounts({
                email: req.body.email,
                account_name: req.body.account_name,
                avatar: null,
                password: hashed,
                create_date: new Date(),
                singer: false
            });

            const account = await newAccount.save();
            res.status(200).json(account);
        } catch (err) {
            console.error("Error in registerAccount:", err);
            res.status(500).json(err);
        }
    },



    loginAccount: async (req, res) => {
        try {
            const account = await Accounts.findOne({ email: req.body.email });
            if (!account) {
                res.status(403).json("Wrong email");
            }
            const validPassword = await bcrypt.compare(req.body.password, account.password);

            if (!validPassword) {
                res.status(403).json("Wrong password");
            }
            if (account && validPassword) {
                res.status(200).json(account);
            }
        } catch (err) {
            console.error("Error in registerAccount:", err);
            res.status(500).json(err);
        }
    }
};

module.exports = authController;