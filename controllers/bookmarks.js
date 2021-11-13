////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const express = require("express")
const Bookmark = require("../models/bookmark")

const router = express.Router()

////////////////////////////////////////////////
// Router Middleware
////////////////////////////////////////////////

// This is where we add user auth stuff if we have time

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Index
router.get("/", async (req,res) => {
    try {
        res.json(await Bookmark.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Destroy
router.delete("/:id", async (req,res) => {
    try {
        res.json(await Bookmark.findByIdAndRemove(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Update
router.put("/:id", async (req,res) => {
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
router.post("/", async (req,res) => {
    try {
        res.json(await Bookmark.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

////////////////////////////////////////////////
// Export
////////////////////////////////////////////////
module.exports = router