////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const express = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/user")

const router = express.Router()

////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////

// Signup
router.post("/signup", async (req,res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    User.create(req.body, (err,user) => {
        
    })
})

// Login
router.post("/login", (req,res) => {
    const {username, password} = req.body;
    User.findOne({username}, (err, user) => {
        if (!user) {

        } else {
            const result = bcrypt.compareSync(
                password, user.password
            )
            if (result) {
                req.session.loggedIn = truereq.session.username = username
                res.redirect("/bookmarks")
            } else {
                
            }
        }
    })
})