import React from 'react'
import Button from '@mui/material/Button';

export const TaskEditForm = ({handleSubmit,setInputValue,text,handleCancel,currentTask}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input id="inputText" type="text" onChange={setInputValue} value={text} placeholder={currentTask}></input>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </form>
  )
}
