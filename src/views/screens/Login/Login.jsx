import React from 'react'
import { bindActionCreators } from 'redux'
import { loginAction } from "../../../store/session/auth/actions";
import { compose } from 'ramda';
import { LoginForm } from "./components/LoginForm";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Message } from 'element-react'

class Login extends React.Component {
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
        this.props.login(email, password);
    }
    render() {
        if(this.props.loginSuccess) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <LoginForm
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
        loginSuccess: state.auth.login.loginSuccess,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(loginAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const LoginScreen = enhance(Login);