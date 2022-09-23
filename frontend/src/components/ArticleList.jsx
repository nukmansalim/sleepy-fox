import React, { useState, useEffect } from 'react'
import Article from './Article'
import { Link } from 'react-router-dom'

import axios from 'axios'
function ArticleList() {
    const [Post, setPost] = useState([]);

    const getPost = async () => {
        try {
            let result = await axios({
                method: "GET",
                url: "http://localhost:8080/posts",

            });
            setPost(result.data);

        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getPost();
    }, []);
    return (
        <div>
            {Post.map((item, i) => {
                return (
                    <>
                        <Link to={`/article/${item._id}`}>
                            <Article key={i}
                                title={item.title}
                                description={item.description}
                            />
                        </Link>
                    </>
                )
            })}

        </div>
    )
}

export default ArticleList