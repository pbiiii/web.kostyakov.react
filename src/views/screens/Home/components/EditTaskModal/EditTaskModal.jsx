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
            id: '',
            title: '',
            body: '',
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            let taskToEdit = Object.assign({}, this.props.taskToEdit)
            this.setState({
                id: taskToEdit.id,
                title: taskToEdit.title,
                body: taskToEdit.body,
            })
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <Dialog
                visible={this.props.visible}
                onCancel={() => {this.props.closeEditTaskModal()}}
                title={`Редактирование задачи № ${this.props.taskToEdit ? this.props.taskToEdit.id : null}`}
            >
                <Dialog.Body>
                    <EditTaskForm
                        body={this.state.body}
                        title={this.state.title}
                        onChange={this.handleChange}
                    />
                </Dialog.Body>
                <Dialog.Footer>
                    <Button onClick={() => {this.props.updateTask(this.state)}}>Сохранить</Button>
                    <Button type="primary" onClick={() => {this.props.closeEditTaskModal()}}>Отменить</Button>
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