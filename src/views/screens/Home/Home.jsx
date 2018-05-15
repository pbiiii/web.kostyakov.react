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
import { ActionCreators } from 'redux-undo';

class Home extends React.Component {
    componentDidMount() {
        this.checkAuth()
        return this.props.fetchTasks()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.checkAuth()
        }
    }
    checkAuth() {
        if(!this.props.token) {
            return this.props.history.push('/login')
        }
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
                        onUndo={this.props.undo}
                        onRedo={this.props.redo}
                        canUndo={this.props.canUndo}
                        canRedo={this.props.canRedo}
                    />
                </Layout.Col>
                <EditTaskModal/>
            </Layout.Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.present.tasksList,
        editTaskModalVisible: state.tasks.present.editTaskModalVisible,
        token: state.auth.token,
        canUndo: state.tasks.past.length > 0,
        canRedo: state.tasks.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: bindActionCreators(fetchTasksAction, dispatch),
        addTask: bindActionCreators(addTaskAction, dispatch),
        deleteTask: bindActionCreators(deleteTaskAction, dispatch),
        changeTaskDoneStatus: bindActionCreators(changeTaskDoneStatusAction, dispatch),
        openEditTaskModal: bindActionCreators(openEditTaskModalAction, dispatch),
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo()),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const HomeScreen = enhance(Home);