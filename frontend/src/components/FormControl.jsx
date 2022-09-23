import React from 'react'

function FormControl() {
    return (
        <form>
            <div class="field">
                <div class="control">
                    <input class="input is-large" type="Text" placeholder="Username" autofocus="" />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-large" type="password" placeholder="Password" />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-large" type="email" placeholder="Email" />
                </div>
            </div>
        </form>
    )
}

export default FormControl