import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../app/App'

export default function Navbar() {

    const { user } = useContext(UserContext)
    return (
        <>
            <section id="ss">
                <header className="container">
                    <nav className="d-flex navbar navbar-expand-lg navbar-light">
                        <div className="me-auto p-2">
                            <a className="navbar-brand" href="#">PCWORLD</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="p-2">
                            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                <ul className="navbar-nav li-color mx-auto fw-bold">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                                    </li>
                                    {user.email ? (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to="/Order" className="nav-link" aria-current="page">Orders</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Admin</a>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/checkout" className="nav-link" aria-current="page">Checkouts</NavLink>
                                            </li>
                                        </>

                                    ) : (
                                            <li className="nav-item">
                                                <NavLink to="/login" className="nav-link" aria-current="page">Login</NavLink>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid  src">
                            <form className="d-flex src">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light bg-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}
