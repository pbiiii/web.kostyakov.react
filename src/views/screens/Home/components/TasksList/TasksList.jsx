import React from "react";
import { Button, Card } from 'element-react'
import {TaskItem} from "../TaskItem";
import {Redo, Undo} from "../UndoRedo";

export const TasksList = ({tasks, addTask, deleteTask, changeTaskDoneStatus, openEditTaskModal, onUndo, onRedo, canUndo, canRedo}) => (
    <Card
        className="box-card"
        header={
            <div className="clearfix">
                <span>Список задач</span>
                <Button type="primary" onClick={() => {
                    addTask({title: 'Без названия'})
                }}>
                    Добавить задачу
                </Button>
                <Undo
                    onUndo={onUndo}
                    canUndo={canUndo}
                />
                <Redo
                    onRedo={onRedo}
                    canRedo={canRedo}
                />
            </div>
        }
    >
        {tasks.length > 0 ?
            tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    changeTaskDoneStatus={changeTaskDoneStatus}
                    openEditTaskModal={openEditTaskModal}
                />
            )) :
            <div>
                <span>
                    Список задач пуст
                </span>
            </div>
        }
    </Card>
)