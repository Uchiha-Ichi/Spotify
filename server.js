const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));


const authRoute = require("./routes/auth.route")
app.use("/v1/auth", authRoute);


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

app.listen(8080, () => {
    console.log("Server is running http://localhost:8080 ");
});


// app.set('view engine', 'ejs');
// app.use(express.static("public"));
// app.get('/', (req, res) => {
//     res.render("home");
// });
// app.get("/login", (req, res) => {
//     res.render("login");
// });
// app.get("/register", (req, res) => {
//     res.render("register");
// })

//AUTHETICATION


