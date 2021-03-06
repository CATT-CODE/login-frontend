import React, { Component } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    handleLogin = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3003/users/login", {
                email: this.state.email,
                password: this.state.password,
            });
            
            this.props.handleUserLogin(this.state);
            this.props.history.push("/home");


        } catch (e) {
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
        const { email, password } = this.state;
        return (
            <div className="form-body">
                <main className="form-signin">
                    <form onSubmit={this.handleLoginSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                        <label htmlFor="inputEmail" className="visually-hidden">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email Address"
                            required
                            autoFocus
                            name="email"
                            value={email}
                            onChange={this.handleLogin}
                        />
                        <label htmlFor="inputPassword" className="visually-hidden">
                            Password
                        </label>
                        <input
                            //type="password"
                            type="text"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={this.handleLogin}
                        />
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Login
                        </button>
                    </form>
                </main>   
            </div>
        )
    }
}
