import React, { Component } from 'react'

import "./SignUp.css"

export default class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    handleSignUp = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <div className="form-body">
                <main className="form-signin">
                <form onSubmit={this}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
                    <label htmlFor="inputFirstName" className="sr-only">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="inputFirstName"
                        className="form-control"
                        placeholder="First Name"
                        required
                        autoFocus
                        name="firstName"
                        value={firstName}
                        onChange={this.handleSignUp}
                        pattern="[A-Za-z]*"
                        />

                    <label htmlFor="inputLastName" className="visually-hidden">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="inputLastName"
                        className="form-control"
                        placeholder="Last Name"
                        required
                        autoFocus
                        name="lastName"
                        value={lastName}
                        onChange={this.handleSignUp}
                        pattern="[A-Za-z]*"
                    />
                    <label htmlFor="inputEmail" className="visually-hidden">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        value={email}
                        onChange={this.handleSignUp}
                        required
                        autoFocus
                    />

                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        type="text"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleSignUp}
                        required
                    />

                    <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this}>
                        Register
                    </button>
                </form>
                </main>
            </div>
        )
    }
}
