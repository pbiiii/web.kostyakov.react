import React from 'react'
import { withRouter, Redirect} from "react-router-dom";
import { compose } from 'ramda';
import { connect } from 'react-redux';
import {TasksList} from './components/TasksList'
import {fetchTasksAction, addTaskAction, deleteTaskAction} from "../../../store/tasks/actions";
import './Home.scss'
import {bindActionCreators} from "redux";
import { Layout } from 'element-react'

class Home extends React.Component {
    componentDidMount() {
        return this.props.fetchTasks()
    }
    render() {
        if(!this.props.token) {
            return <Redirect to='/login'/>
        }
        return (
            <Layout.Row type='flex' justify='center'>
                <Layout.Col span={12}>
                    <TasksList
                        tasks={this.props.tasks}
                        onAddTask={this.props.addTask}
                        onDeleteTask={this.props.deleteTask}
                    />
                </Layout.Col>
            </Layout.Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks.tasks,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: bindActionCreators(fetchTasksAction, dispatch),
        addTask: bindActionCreators(addTaskAction, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const HomeScreen = enhance(Home);