import { useLogin } from '../../hooks/UseLogin'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const { login, error, isLoading } = useLogin()


    const navigate = useNavigate()

    const token = window.localStorage.getItem("auth")
    if (token) {
        navigate("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username, email, password)
        await login(username, email, password)
    }
    return (
        <div className="hero is-fullheight">
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='column is-4 is-offset-4'>
                        <h3 className='title is-size-4 mb-5'>Please Login to Make an Article</h3>
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
                            <div className="field">
                                <div className="control">
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        className="input is-large"
                                        type="email"
                                        placeholder="Email" />
                                </div>
                            </div>
                            {error && <div className='notification is-danger is-light is-size-8 p-2 '>
                                {error}
                            </div>
                            }
                            <button disabled={isLoading} className='button is-info'>Login</button>
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