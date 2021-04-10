import React from 'react'

export default function Navbar() {
    return (
        <>
            <section id="ss">
                <header className="container">
                    <nav className="d-flex navbar navbar-expand-lg navbar-light">
                        <div className="me-auto p-2">
                            <a className="navbar-brand" href="#"><img className="imgg" src="images/Group 33072.png" alt="" /></a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="p-2">
                            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                <ul className="navbar-nav li-color mx-auto fw-bold">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Admin</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Deals</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="bg-success nav-link" href="#">Login</button>
                                    </li>
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
