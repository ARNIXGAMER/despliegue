import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, handleStatus, handleEdit, handleDelete}) => {
    console.log(tasks)
    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}><TaskItem task={task} handleStatus={handleStatus} handleEdit={handleEdit} handleDelete={handleDelete} /></li>
            })}
        </ul>
    )
}
