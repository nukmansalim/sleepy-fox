import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useToken } from '../hooks/useToken'
function AddArticle() {
    const [Title, setTitle] = useState("")
    const [Body, setBody] = useState("")
    useToken("auth")


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/posts', {
            title: Title,
            description: Body
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container box p-6
        has-background-light">
            <h1 className="title has-text-centered
         has-text-info">
                Publish your articles
            </h1>
            <form onSubmit={handleSubmit} action="">
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">
                        Body
                    </label>
                    <div className="control">
                        <textarea
                            onChange={(e) => setBody(e.target.value)}
                            className="textarea"
                        ></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-success">
                            Add Article
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddArticle