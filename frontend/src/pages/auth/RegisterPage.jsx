import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { Link } from 'react-router-dom'
function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div className="hero is-fullheight">
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='column is-4 is-offset-4'>
                        <h3 className='title is-size-4 mb-5'>Register</h3>
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
                        <p className='mt-3'>Already Have Account? <Link to='/login'> Click Here to Signin </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage