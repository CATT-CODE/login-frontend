import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto fw-normal">
                <Link to="/home">
                    <i className="fas fa-film"></i>
                </Link>
            </p>
            <nav className="my-2 my-md-0 me-md-3">
                <NavLink
                    exact
                    className="p-2"
                    activeClassName="active-class-style"
                    to="/home"
                >
                    Home
                </NavLink>
            </nav>
            {props.user ? (
                <>
                    <NavLink
                        className="btn btn-outline-primary"
                        activeStyle={{ color: "yellow" }}
                        to="/profile"
                    >
                        {props.user.email}
                    </NavLink>
                    <Link
                        className="btn btn-outline-primary"
                        to="/login"
                        // onClick={props.handleUserLogout}
                    >
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <NavLink
                        className="btn btn-outline-primary"
                        activeClassName="active-class-style"
                        to="/sign-up"
                    >
                        Sign Up
                    </NavLink>
                    <NavLink
                        className="btn btn-outline-primary"
                        activeClassName="active-class-style"
                        to="/login"
                    >
                        Login
                    </NavLink>
                </>
            )}
        </header>
    );
}
