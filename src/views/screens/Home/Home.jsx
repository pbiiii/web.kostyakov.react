import React from 'react'
import { withRouter, Redirect} from "react-router-dom";
import { Button } from 'element-react'
import { compose } from 'ramda';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {logoutAction} from "../../../store/session/auth/actions";


class Home extends React.Component {
    render() {
        if(!this.props.token) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <Button type="primary" nativeType="submit" onClick={this.props.logout}>
                    Выйти
                </Button>
                Home page
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logoutAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const HomeScreen = enhance(Home);