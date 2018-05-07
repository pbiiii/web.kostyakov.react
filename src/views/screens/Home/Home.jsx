import React from 'react'
import { withRouter } from "react-router-dom";
import { compose } from 'ramda';
import { connect } from 'react-redux';
import {TasksList} from './components/TasksList'
import {fetchTasksAction, addTaskAction, deleteTaskAction, changeTaskDoneStatusAction, openEditTaskModalAction} from "../../../store/tasks/actions";
import './Home.scss'
import { bindActionCreators } from "redux";
import { Layout } from 'element-react'
import { EditTaskModal } from './components/EditTaskModal'

class Home extends React.Component {
    componentDidMount() {
        if(!this.props.token) {
            return this.props.history.push('/login')
        }
        return this.props.fetchTasks()
    }
    render() {
        return (
            <Layout.Row type='flex' justify='center'>
                <Layout.Col span={12}>
                    <TasksList
                        tasks={this.props.tasks}
                        addTask={this.props.addTask}
                        deleteTask={this.props.deleteTask}
                        changeTaskDoneStatus={this.props.changeTaskDoneStatus}
                        openEditTaskModal={this.props.openEditTaskModal}
                    />
                </Layout.Col>
                <EditTaskModal/>
            </Layout.Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasksList,
        editTaskModalVisible: state.tasks.editTaskModalVisible,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: bindActionCreators(fetchTasksAction, dispatch),
        addTask: bindActionCreators(addTaskAction, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch),
        changeTaskDoneStatus: bindActionCreators(changeTaskDoneStatusAction, dispatch),
        openEditTaskModal: bindActionCreators(openEditTaskModalAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const HomeScreen = enhance(Home);