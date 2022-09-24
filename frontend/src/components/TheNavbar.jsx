import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function TheNavbar({ user }) {
    const [isActive, setisActive] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("auth")
        window.location.reload()
    }
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item'>
                    <img
                        src='https://bulma.io/images/bulma-logo.png'
                        alt='Logo'
                        width='112'
                        height='28'
                    />
                </a>

                <button onClick={() => { setisActive(!isActive) }}
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </button>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        {!user &&
                            <Link to="/login" className={` ${isActive ? 'navbar-item' : 'button is-info mr-1'}`}>

                                Login
                            </Link>
                        }
                        {user &&
                            <p
                                onClick={handleLogout}
                                className={` ${isActive ? 'navbar-item' : 'button is-info mr-1'}`}>
                                Logout
                            </p>
                        }
                        {user &&
                            <Link className={` ${isActive ? 'navbar-item' : 'button is-info ml-1'}`} to='/article/add'>

                                Publish your article

                            </Link>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TheNavbar