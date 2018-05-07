import React from "react";
import { Button, Switch } from 'element-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

export const TaskItem = ({task, deleteTask, changeTaskDoneStatus, openEditTaskModal}) => (
    <div className="text item" key={task.id} id={'task-'+task.id}>
        <div className="item-body">
            <div className="item-header">
                <p>{task.id}. {task.title}</p>
                <Switch
                    value={task.done}
                    onText="Выполнена"
                    offText="Не выполнена"
                    onColor="#13ce66"
                    offColor="#ff4949"
                    width={130}
                    onChange={() => {changeTaskDoneStatus(task, !task.done)}}
                />
            </div>
            <p>{task.body}</p>
        </div>
        <div className="item-controls">
            <Button type="warning" onClick={() => {openEditTaskModal(task)}}><FaPencil/></Button>
            <Button type="danger" onClick={() => {deleteTask(task)}}><FaTrash/></Button>
        </div>
    </div>
)