const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const UserRoutes = require('./routes/UserRoutes')
const PostRoutes = require('./routes/PostRoutes')
require('dotenv').config()

//connect mongoose
mongoose.connect(process.env.MONGO_URI, () => console.log("database is connected"))



//express basic middleware
app.use(express.json())
app.use(cors())


//custom middleware
app.use("/posts", PostRoutes)
app.use("/auth", UserRoutes)

app.listen(process.env.PORT, () => console.log(`server is running on port`))

