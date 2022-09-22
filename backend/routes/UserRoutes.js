const express = require("express")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport = require('passport')

const router = express.Router()



router.get('/google', passport.authenticate('google'), (req, res) => {
    res.send(200)
}
)


module.exports = router