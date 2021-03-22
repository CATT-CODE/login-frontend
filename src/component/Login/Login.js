import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    
    render() {
        return (
            <div className="form-body">
                <main className="form-signin">
                    <form onSubmit={this}>
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
                            value={this.state.email}
                            onChange={this}
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
                            value={this.state.password}
                            onChange={this}
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
