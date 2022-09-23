const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const UserRegister = async (req, res) => {
    const user = req.body

    const takenUsername = await User.findOne({ username: user.username })
    const takenEmail = await User.findOne({ email: user.email })
    if (takenUsername || takenEmail) {
        res.json({ message: "Register Failed, please try again" })
    } else {
        HashedPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: HashedPassword
        })
        createUser.save()
        res.json({ message: "register success" })
    }


}

const UserLogin = async (req, res) => {
    const user = await User.findOne({
        username: req.body.username,
        email: req.body.email,
    })
    if (user) {
        const validUser = bcrypt.compareSync(req.body.password, user.password)
        if (!validUser) {
            res.json({ message: "Invalid user data, please try again" })
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_STRING, {
                expiresIn: 86400
            })
            res.json({
                auth: true,
                token: token,
                username: user.username,
                email: user.email
            })
        }
    }
    else {
        res.json({ message: "User not found" })
    }

}

module.exports = { UserRegister, UserLogin }
