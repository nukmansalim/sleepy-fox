const express = require('express')
const mongoose = require('mongoose')
const Post = require('../models/post.model')

const getAllPosts = async (req, res) => {

    try {
        const Posts = await Post.find()
        res.status(200).json(Posts)
    } catch (error) {
        res.status(500).json(error)
    }

}

const getPost = async (req, res) => {

    try {
        const { id } = req.params.id
        const post = await Post.findOne(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)

    }

}

const createPost = async (req, res) => {

    try {
        const { title, description, tags } = req.body

        const post = await Post.create({
            title: title,
            description: description,
            tags: tags,
        })

        res.json(post)
    } catch (error) {
        res.status(500).json(error)

    }

}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params.id
        const post = await Post.findOneAndUpdate(id, req.body, { new: true })
        await res.json(post)

    } catch (error) {
        res.status(500).json(error)
    }
}
const deletePost = async (req, res) => {
    try {
        const { id } = req.params.id
        const post = await Post.findOneAndRemove(id)
        res.json({ message: "Posts Deleted" })
        if (!post) {
            return res.status(404).send({
                message: "Note not found with id " + id
            })
        }

    }
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost }