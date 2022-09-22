const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PostRoutes = require('./routes/PostRoutes')
const UserRoutes = require('./routes/UserRoutes')
const session = require('express-session')
const passport = require("passport")
require('dotenv').config()

//connect mongoose
mongoose.connect("mongodb://localhost:27017/MERN-Web", () => console.log("database is connected"))


//passport config
require('./strategies/google.js')(passport)

//express basic middleware
app.use(express.json())
app.use(cors())
app.use(session({
    secret: 'blogweb',
    resave: 'false',
    saveUninitialized: true
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//custom middleware
app.use("/posts", PostRoutes)
app.use("/auth", UserRoutes)

app.listen(process.env.PORT, () => console.log(`server is running on port`))

