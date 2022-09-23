import React from 'react'
import { Link } from 'react-router-dom'
import FormControl from '../../components/FormControl'
function RegisterPage() {
    return (
        <div className="hero is-fullheight">
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <div className='column is-4 is-offset-4'>
                        <h3 className='title is-size-4 mb-5'>Register</h3>
                        <FormControl />
                        <p className='mt-3'>Already Have Account? <Link to='/login'> Click Here to Signin </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage