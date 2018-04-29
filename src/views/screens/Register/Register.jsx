import React  from 'react';
import { bindActionCreators } from 'redux'
import { registerAction } from "../../../store/session/auth/actions";
import { RegisterForm } from './components/RegisterForm'
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Message } from 'element-react'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.register(email, password);
    }
    componentDidUpdate() {
        if(this.props.registerSuccess) {
            Message({
                message: 'Register success',
                type: 'success'
            })
        }
        if(this.props.userAlreadyExists) {
            Message({
                message: `User with email ${this.state.email} already registered`,
                type: 'warning'
            })
        }
    }
    render() {
        if(this.props.registerSuccess || this.props.userAlreadyExists) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <RegisterForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registerSuccess: state.auth.register.registerSuccess,
        userAlreadyExists: state.auth.register.userAlreadyExists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(registerAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const RegisterScreen = enhance(Register);