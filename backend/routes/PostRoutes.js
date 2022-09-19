const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/post.controller')

router.get("/", getAllPosts)
router.post("/", createPost)
router.patch("/update/:id", updatePost)
router.delete("/delete/:id", deletePost)

router.get("/:id", getPost)


module.exports = router