import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto fw-normal">
                <Link to="/">
                    <i className="fas fa-film"></i>
                </Link>
            </p>
        </header>
    )
}
