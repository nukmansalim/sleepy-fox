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
            <div className='container'>
                <div style={{ border: '1px solid', boxShadow: '5px 10px' }}
                    className='title is-1 box is-active'>
                    <h1>{Post.title}</h1>
                </div>
                <div
                    style={{ border: '1px solid', boxShadow: '3px 3px' }}
                    className='box is-size-4 mt-2 is-active'>

                    <h1>{Post.description}</h1>
                </div>
            </div>
        </>
    )
}

export default ArticleDetails