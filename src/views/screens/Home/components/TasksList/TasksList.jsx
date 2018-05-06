import React from "react";
import { Button, Card } from 'element-react'
import {TaskItem} from "../TaskItem";

export const TasksList = ({tasks, onAddTask, onDeleteTask, onChangeTaskDoneStatus}) => (
    <Card
        className="box-card"
        header={
            <div className="clearfix">
                <span>Список задач</span>
                <Button type="primary" onClick={() => {
                    onAddTask({title: 'Без названия'})
                }}>
                    Добавить задачу
                </Button>
            </div>
        }
    >
        {tasks.length > 0 ?
            tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onChangeTaskDoneStatus={onChangeTaskDoneStatus}
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