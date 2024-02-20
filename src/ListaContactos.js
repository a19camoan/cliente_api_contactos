import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Para listar necesitamos hacer una petición GET a la API usando un token como bearer token previamente obtenido en el login.

class ListaContactos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost/contactos', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response.data);
                this.setState({ contactos: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Contactos</h1>
                    <ul>
                        {this.state.contactos.map(contacto => <li key={contacto.id}>{contacto.nombre}</li>)}
                    </ul>
                </header>
            </div>
        );
    }
}

export default ListaContactos;
