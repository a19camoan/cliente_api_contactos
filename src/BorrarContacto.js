import React, { Component } from 'react';
import axios from 'axios';

class BorrarContacto extends Component {
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location = '/';
        }

        const id = window.location.pathname.split('/')[2];
        axios.delete(`http://localhost/contactos/${id}`, {
            headers: {
                'Bearer': localStorage.getItem('token')
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
        return null;
    }
}

export default BorrarContacto;
