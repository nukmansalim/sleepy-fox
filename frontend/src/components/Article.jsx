import React from 'react'

function Article(props) {

    return (

        <section class="hero is-warning m-3">
            <div class="hero-body">
                <p class="title">
                    {props.title}
                </p>
                <div class="subtitle">
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