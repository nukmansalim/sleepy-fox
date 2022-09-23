import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function TheNavbar() {
    const [isActive, setisActive] = useState(false)
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

                <a onClick={() => { setisActive(!isActive) }}
                    role='button'
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <Link to="/login">
                            <a className={` ${isActive ? 'navbar-item' : 'button is-info mr-1'}`}>
                                Login
                            </a>
                        </Link>
                        <Link to='/article/add'>
                            <a className={` ${isActive ? 'navbar-item' : 'button is-info ml-1'}`}>
                                Publish your article
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TheNavbar