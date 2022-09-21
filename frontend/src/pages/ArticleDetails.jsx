import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
function ArticleDetails() {
    const params = useParams()
    const id = params.id
    const [Post, setPost] = useState([])


    useEffect(() => {
        const getSinglePost = async () => {
            const res = await axios.get(`http://localhost:8080/posts/${id}`)
            setPost(res.data)
        };
        getSinglePost()
    }, [id]);

    return (
        <>
            <h1>{Post.title}</h1>
            <h1>{Post.description}</h1>
        </>
    )
}

export default ArticleDetails