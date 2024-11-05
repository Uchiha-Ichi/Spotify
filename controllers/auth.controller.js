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
            return res.redirect('/');
        } catch (err) {
            console.error("Error in registerAccount:", err);
            return res.redirect('/auth/register?error=Internal server error');
        }
    },



    loginAccount: async (req, res) => {
        try {
            console.log(req.body);
            const account = await Accounts.findOne({ email: req.body.email });

            if (!account) {
                return res.redirect('/auth/login?error=Wrong email');
            }
            const validPassword = await bcrypt.compare(req.body.password, account.password);

            if (!validPassword) {
                return res.redirect('/auth/login?error=Wrong password');
            }
            if (account && validPassword) {
                res.cookie('username', account.account_name, { maxAge: 900000, httpOnly: true });
                res.cookie('email', account.email, { maxAge: 900000, httpOnly: true });
                res.cookie('avatar', account.avatar || '', { maxAge: 900000, httpOnly: true });
                res.cookie('singer', account.singer, { maxAge: 900000, httpOnly: true });
                return res.redirect('/');
            }
        } catch (err) {
            console.error("Error in registerAccount:", err);
            return res.redirect('/auth/login?error=Internal server error');
        }
    },
    logoutAccount: async (req, res) => {
        res.clearCookie('username');
        res.clearCookie('email');
        res.clearCookie('avatar');
        res.clearCookie('singer');


        res.redirect('/');
    }
};

module.exports = authController;