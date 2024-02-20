import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/login', this.state)
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="usuario">Nombre: </label>
                            <input type="nombre" name="usuario" onChange={this.handleChange} id="usuario" />
                        </div>
                        <div>
                            <label htmlFor="nombre">Contraseña: </label>
                            <input type="password" name="password" onChange={this.handleChange} />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login;
