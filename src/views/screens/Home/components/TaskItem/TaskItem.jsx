import React from "react";
import { Button } from 'element-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

export const TaskItem = ({task, onDeleteTask}) => (
    <div className="text item" key={task.id} id={'task-'+task.id}>
        <div className="item-header">
            <span>{task.id}. {task.title}</span>
            <Button type="warning"><FaPencil/></Button>
            <Button type="danger" onClick={() => {onDeleteTask(task)}}><FaTrash/></Button>
        </div>
        <div className="item-body">
            <p>{task.body}</p>
        </div>
        <div className="item-footer">
                {task.done ?
                    <p className="is-success">
                        выполнена
                    </p> :
                    <p className="is-error">
                        не выполнена
                    </p>
                }
        </div>
    </div>
)