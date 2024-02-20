import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class CrearContacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            telefono: ''
        };
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location = '/';
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/contactos', this.state, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                window.location = '/contactos';
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Crear-contacto">
                <header className="Crear-contacto-header">
                    <h1>Nuevo contacto</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="nombre" name="nombre" onChange={this.handleChange} id="nombre" />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono: </label>
                            <input type="telefono" name="telefono" onChange={this.handleChange} />
                        </div>
                        <button type="submit">Guardar</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default CrearContacto;
