import React, { Component } from 'react';
import {toast} from "react-toastify";
import axios from "axios";

import "./SignUp.css";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleSignUp = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };

    handleOnSubmit = async (event) => {
        event.preventDefault();

        let {firstName, lastName, email, password} = this.state;

        try {
            await axios.post("http://localhost:3003/users/sign-up", {
                firstName,
                lastName,
                email,
                password
            });
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });

            toast.success("Winner Winner Chicken Dinner", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } catch (e) {
            console.log(e.response);
            toast.error(e.response.data, { 
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }

    }
    
    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <div className="form-body">
                <main className="form-signin">
                <form onSubmit={this.handleOnSubmit}>
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

                    <button className="btn btn-lg btn-primary btn-block" type="submit" >
                        Register
                    </button>
                </form>
                </main>
            </div>
        )
    }
}
