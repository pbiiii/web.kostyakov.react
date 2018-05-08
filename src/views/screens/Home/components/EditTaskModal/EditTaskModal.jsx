import React from "react";
import {withRouter} from "react-router-dom";
import {closeEditTaskModalAction, updateTaskAction} from "../../../../../store/tasks/actions";
import { compose } from 'ramda';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Dialog, Button} from 'element-react'
import {EditTaskForm} from "./components/EditTaskForm";

class EditTaskModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id: '',
                title: '',
                body: '',
            },
            changed:false,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            let taskToEdit = Object.assign({}, this.props.taskToEdit)
            this.setState({
                task: {
                    id: taskToEdit.id,
                    title: taskToEdit.title,
                    body: taskToEdit.body,
                }
            })
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ task: Object.assign(this.state.task, {[name]: value}) })
        this.setState({changed: true})
    }
    onClose() {
        if(this.state.changed) {
            let confirmed = window.confirm('Изменения не сохранятся, вы уверены что хотите закрыть окно?')
            if(confirmed) {
                this.setState({changed: false})
                this.props.closeEditTaskModal()
            }
        } else {
            this.props.closeEditTaskModal()
        }
    }
    onUpdateTask(task) {
        this.props.updateTask(task)
        this.setState({changed: false})
    }
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                onCancel={() => {this.onClose()}}
                title={`Редактирование задачи № ${this.props.taskToEdit ? this.props.taskToEdit.id : null}`}
            >
                <Dialog.Body>
                    <EditTaskForm
                        body={this.state.task.body}
                        title={this.state.task.title}
                        onChange={this.handleChange}
                    />
                </Dialog.Body>
                <Dialog.Footer>
                    <Button disabled={!this.state.changed} onClick={() => {this.onUpdateTask(this.state.task)}}>Сохранить</Button>
                    <Button type="primary" onClick={() => {this.onClose()}}>Отменить</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskToEdit: state.tasks.taskToEdit,
        visible: state.tasks.editTaskModalVisible,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: bindActionCreators(updateTaskAction, dispatch),
        closeEditTaskModal: bindActionCreators(closeEditTaskModalAction, dispatch),
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const EditTaskModal = enhance(EditTaskModalComponent);