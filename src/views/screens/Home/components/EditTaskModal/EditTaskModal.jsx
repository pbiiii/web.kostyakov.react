import React from "react";
import {withRouter} from "react-router-dom";
import {closeEditTaskModalAction, updateTaskAction, changeTaskEditForm} from "@/store/tasks/actions";
import { compose } from 'ramda';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Dialog, Button} from 'element-react'
import {EditTaskForm} from "./components/EditTaskForm";
import { ActionCreators } from 'redux-undo';
import { Undo, Redo } from "./../UndoRedo";

class EditTaskModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed:false
        }
    }
    componentDidUpdate(prevProps, prevState) {

    }
    handleChange = (e) => {
        e.preventDefault()
        this.props.changeTaskEditForm(e.target)
        this.setState({changed: true})
    }
    onClose() {
        if(this.state.changed) {
            let confirmed = window.confirm('Изменения не сохранятся, вы уверены что хотите закрыть окно?')
            if (confirmed) {
                this.setState({changed: false})
            } else {
                return
            }
        }
        this.props.closeEditTaskModal()
        this.props.clearHistory()
    }
    onUpdateTask(task) {
        this.props.updateTask(task)
        this.setState({changed: false})
        this.props.clearHistory()
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
                        body={this.props.taskToEdit.body}
                        title={this.props.taskToEdit.title}
                        onChange={this.handleChange}
                    />
                </Dialog.Body>
                <Dialog.Footer>
                    <Button disabled={!this.state.changed} onClick={() => {this.onUpdateTask(this.props.taskToEdit)}}>Сохранить</Button>
                    <Button type="primary" onClick={() => {this.onClose()}}>Отменить</Button>
                    <Undo
                        onUndo={this.props.undo}
                        canUndo={this.props.canUndo}
                    />
                    <Redo
                        onRedo={this.props.redo}
                        canRedo={this.props.canRedo}
                    />
                </Dialog.Footer>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskToEdit: state.editTask.present.taskToEdit,
        visible: state.editTask.present.modalVisible,
        canUndo: state.editTask.past.length > 0,
        canRedo: state.editTask.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: bindActionCreators(updateTaskAction, dispatch),
        closeEditTaskModal: bindActionCreators(closeEditTaskModalAction, dispatch),
        changeTaskEditForm: bindActionCreators(changeTaskEditForm, dispatch),
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo()),
        clearHistory: () => dispatch(ActionCreators.clearHistory())
    }
}

const withStore = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(
    withRouter,
    withStore
);

export const EditTaskModal = enhance(EditTaskModalComponent);