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
// router.get("/signup", (req,res) => {
    
// })

router.post("/signup", async (req,res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    User.create(req.body, (err,user) => {
        
    })
})