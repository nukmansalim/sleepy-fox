import React from 'react'
import { useState } from 'react'

function AddArticle() {
    const [Title, setTitle] = useState("")
    const [Body, setBody] = useState("")
    const [Tags, setTags] = useState([])
    const [createTags, setCreateTags] = useState("")

    const addTags = () => {
        const newTags = {
            id: Math.floor(Math.random() * 50),
            value: createTags
        }
        setTags((prevTags) => [...prevTags, newTags])
        setCreateTags('')
    }
    const deleteTags = (id) => {
        const newArray = Tags.filter((Tag) => Tag.id !== id);
        setTags(newArray);
    }
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
                <div className="field">
                    <label className="label"> Tags</label>
                    <div className="control">
                        <input
                            onChange={(e) => setCreateTags(e.target.value)}
                            className="input"
                            type="text" />
                        <div className=''>
                            {Tags.map((Tag, id) => {
                                return (
                                    <button
                                        onClick={() => deleteTags(Tag.id)}
                                        className='button is-info m-2'
                                        key={id}>
                                        {Tag.value}
                                        <span className="icon ml-1 is-small">
                                            <i className="fa-solid fa-xmark"></i>
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                        <button
                            onClick={addTags}
                            type='submit'
                            className='mt-3 button is-info'>Add Tags</button>
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