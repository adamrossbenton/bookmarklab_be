////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const Bookmark = require("./models/bookmark")

const {PORT} = process.env;
const app = express()

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Test
app.get("/", (req,res) => {
    res.send("hello bookmark")
})

// Index
app.get("/bookmarks", (req,res) => {
    res.send("Bookmark Index")
})

////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////
app.listen(PORT, console.log(`On ${PORT}`))
