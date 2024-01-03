import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaSun } from "react-icons/fa";
import { changeMode } from '../store/slice/ModeSlice';

const Navbar = () => {

    let mode = useSelector((state) => state.mode)
    let dispatch = useDispatch()


    return (
        <>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/data">Data</Link>
                            </li>

                        </ul>
                        <div className="d-flex justify-content-center" role="search">
                            <button onClick={() => dispatch(changeMode())}>{mode ? <FaSun /> : <FaMoon />}</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar