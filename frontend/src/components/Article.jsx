import React from 'react'
import { useState } from 'react'
import { BsHandThumbsUp } from 'react-icons/bs'
function Article(props) {
    return (
        <section
            style={{
                border: '1px solid',
                borderRadius: '15px',
                boxShadow: '3px 3px'
            }}
            className="hero is-warning m-3">

            <div className="hero-body">
                <p className="title">
                    {props.title}
                </p>
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="subtitle">
                    {props.description}
                    <br />
                </div>
                <div>
                </div>
                <BsHandThumbsUp />
            </div>
        </section >
    )
}

export default Article