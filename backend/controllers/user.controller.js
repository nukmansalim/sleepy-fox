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
    const { username, password, email } = req.body

    const user = await User.findOne({
        username: username,
        email: email
    })
    if (user) {

        const isCorrect = bcrypt.compare(password, user.password)
        if (isCorrect) {
            const Token = jwt.sign({
                username: user.username,
                password: user.password,
                email: user.email
            }, process.env.JWT_STRING)
            return res.json(Token)
        }



        // }else{
        //     res.json({ message: "Login Failed" })
        // }
    }
}

module.exports = { UserRegister, UserLogin }
