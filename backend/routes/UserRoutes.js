const express = require('express')
const router = express.Router()
const { UserRegister, UserLogin, getMe } = require('../controllers/user.controller')

router.post("/register", UserRegister)
router.post("/login", UserLogin)
router.post("/getme", getMe)
module.exports = router
