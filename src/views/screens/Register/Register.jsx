import React, { Component } from 'react';

import { RegisterForm } from './components/RegisterForm'

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            password: ''
        }
    }

    // changeHandler = (password) => {
    //     this.setState({
    //         password: password
    //     })
    // }

    // submitHandler = () => {

    // }
    
    render() {
        return (
            <div>
                <RegisterForm />
            </div>
        );
    }
}

export default Register;