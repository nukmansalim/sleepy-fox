import React from 'react'
function Article(props) {

    return (
        <section
            style={{
                border: '1px solid',
                borderRadius: '15px',
                boxShadow: '3px 3px'
            }}
            class="hero is-warning m-3">

            <div class="hero-body">
                <p class="title">
                    {props.title}
                </p>
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} class="subtitle">
                    {props.description}
                    <br />
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}

export default Article