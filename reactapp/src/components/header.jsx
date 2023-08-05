import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/task">Task</Link>
                            <Link className="nav-link" to="/nothing-here">Nothing Here</Link>
                        </div>


                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link" to="/sign-up">
                                <i className="fas fa-sign-out-alt"></i> Sign Up
                            </Link>
                            <Link className="nav-link" to="/login">
                                <i className="fas fa-sign-out-alt"></i> Login
                            </Link>
                            <Link className="nav-link" to="/logout">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header