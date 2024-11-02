const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const { Accounts, Albums, Songs, Types, Loves, Listens, PlayLists } = require("./model/model");

// 1. Tạo một tài khoản mới
const newAccount = new Accounts({
    id_account: "HuanRose",
    email: "rose@gmail.com",
    account_name: "Huan Hoa Hong",
    avatar: null,
    password: "123456",
    create_date: new Date(),
    role: "Singer"
});



//connect DB
async function connectDB() {
    try {
        await mongoose.connect((process.env.MONGODB_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();

newAccount.save()
    .then(account => console.log("Account saved:", account))
    .catch(error => console.error("Error saving account:", error));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.listen(8080, () => {
    console.log("Server is running... ");
});