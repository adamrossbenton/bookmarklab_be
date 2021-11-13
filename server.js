////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const Bookmark = require("./models/bookmark")
const BookmarkRouter = require("./controllers/bookmarks")
const MongoStore = require("connect-mongo")

const {PORT, SECRET} = process.env;
const app = express()

////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/bookmarks", BookmarkRouter)
// Setting up auth
// app.use(session({
//     secret: SECRET,
//     store: MongoStore.create({mongoUrl: DB_URL}),
//     saveUnitialized: true,
//     resave: false
// }))

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
