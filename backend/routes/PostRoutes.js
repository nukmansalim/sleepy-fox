const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    getPost,
    getPostbyAuthor,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/post.controller')

router.get("/", getAllPosts)
router.post("/", createPost)

router.get("/:userId", getPostbyAuthor)
router.patch("/update/:id", updatePost)
router.delete("/delete/:id", deletePost)

router.get("/:id", getPost)


module.exports = router