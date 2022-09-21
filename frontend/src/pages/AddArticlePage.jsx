import React from 'react'
import { useState } from 'react'

function AddArticle() {
    const [Title, setTitle] = useState("")
    const [Body, setBody] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
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