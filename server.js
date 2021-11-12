////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const Bookmark = require("./models/bookmark")

const {PORT} = process.env;
const app = express()

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Test
app.get("/", (req,res) => {
    res.send("hello bookmark")
})

// Index
app.get("/bookmarks", async (req,res) => {
    try {
        res.json(await Bookmark.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Update
app.put("/bookmarks/:id", async (req,res) => {
    try {
        res.json(await Bookmark.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Create
app.post("/bookmarks", async (req,res) => {
    try {
        res.json(await Bookmark.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////
app.listen(PORT, console.log(`On ${PORT}`))
