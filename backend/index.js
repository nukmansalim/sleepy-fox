const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PostRoutes = require('./routes/PostRoutes')
const UserRoutes = require('./routes/UserRoutes')
const PORT = 8080 || process.env.PORT


mongoose.connect("mongodb://localhost:27017/MERN-Web", () => console.log("database is connected"))

app.use(express.json())
app.use(cors())

app.use("/posts", PostRoutes)
app.use("/auth", UserRoutes)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

