////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const {PORT, DB_URL} = process.env;
const app = express()

////////////////////////////////////////////////
// DB
////////////////////////////////////////////////
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
    .on("open", () => console.log("Connected to DB"))
    .on("open", () => console.log("Disconnected from DB"))
    .on("error", (err) => console.log(err))

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Test
app.get("/", (req,res) => {
    res.send("hello bookmark")
})

////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////
app.listen(PORT, console.log(`On ${PORT}`))
