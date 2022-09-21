import React, { useState, useEffect } from 'react'
import Article from './Article'
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
                        <Article key={i}
                            title={item.description}
                            description="hello this is on client-side" />
                    </>
                )
            })}

        </div>
    )
}

export default ArticleList