import React from 'react'
import { Link } from 'react-router-dom'
import FormControl from '../../components/FormControl'
function LoginPage() {
    return (
        <div className="hero is-fullheight">
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='column is-4 is-offset-4'>
                        <h3 className='title is-size-4 mb-5'>Please Login to Make an Article</h3>
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
                        <p className='mt-3'>Doesn't Have Account? <Link to='/signup'> Click Here to Signup </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage