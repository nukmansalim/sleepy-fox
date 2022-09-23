import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { Link } from 'react-router-dom'
function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { signup, error, isLoading } = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username, email, password)
        await signup(username, email, password)
    }
    return (
        <div className="hero is-fullheight">
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='column is-4 is-offset-4'>
                        <h3 className='title is-size-4 mb-5'>Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input
                                        onChange={e => setUsername(e.target.value)}
                                        className="input is-large"
                                        type="Text"
                                        placeholder="Username" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        className="input is-large"
                                        type="password"
                                        placeholder="Password" />
                                </div>
                            </div>
                            <div className="field" >
                                <div className="control" >
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        className="input is-large"
                                        type="email"
                                        placeholder="Email" />
                                </div >
                            </div >
                            {error && <div className='notification is-danger is-light is-size-8 p-2 '>
                                {error}
                            </div>
                            }
                            <button
                                className='button is-info'
                                disabled={isLoading}>Register</button>
                        </form >

                        <p className='mt-3'>Already Have Account? <Link to='/login'> Click Here to Signin </Link>
                        </p>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default RegisterPage