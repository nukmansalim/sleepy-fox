import React from 'react'
import { useState } from 'react'

function AddArticle() {
    const [Tags, setTags] = useState([])
    const [createTags, setCreateTags] = useState("")

    // const handleTags = (e) => {
    //     e.preventDefault()
    //     setTags(createTags)
    // }

    const addTags = () => {
        Tags.push(createTags)
        setCreateTags('')
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
                        <input className="input" type="text" />
                    </div>
                </div>


                <div className="field">
                    <label className="label">
                        Something Else
                    </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                        ></textarea>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Article Tags</label>
                    <div className="control">
                        <input
                            onChange={(e) => setCreateTags(e.target.value)}
                            className="input"
                            type="text" />
                        <div className=''>
                            {Tags.map((Tag, i) => {
                                return (
                                    <button className='button is-info m-2' key={i}>
                                        {Tag}

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