import React  from 'react';
import { bindActionCreators } from 'redux'
import { register } from "../../../store/session/auth/actions";
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
    }
    render() {
        if(this.props.registerSuccess) {
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
        registerSuccess: state.register.registerSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export default enhance(Register);