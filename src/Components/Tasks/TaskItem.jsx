import React from 'react'

export const TaskItem = ({task,handleStatus,handleEdit,handleDelete}) => {
  return (
      <div>
          <i className={task.finish ? 'fas fa-circle' : 'far fa-circle' }  onClick={()=>handleStatus(task.id)}></i>
          <p style={{ textDecorationLine: task.decoration }}>{task.title}</p>
          <div id="container">
              <i className='fas fa-pen' onClick={()=>handleEdit(task.id)}></i>
              <i className='fas fa-trash' onClick={()=>handleDelete(task.id)}></i>
          </div>
      </div>
  )
}
