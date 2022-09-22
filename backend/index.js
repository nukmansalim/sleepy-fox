const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PostRoutes = require('./routes/PostRoutes')
const UserRoutes = require('./routes/UserRoutes')
const passport = require("passport")
require('./strategies/google.js')
require('dotenv').config()
mongoose.connect("mongodb://localhost:27017/MERN-Web", () => console.log("database is connected"))

app.use(express.json())
app.use(cors())
app.use(passport.initialize())
app.use("/posts", PostRoutes)
app.use("/auth", UserRoutes)

app.listen(process.env.PORT, () => console.log(`server is running on port`))

