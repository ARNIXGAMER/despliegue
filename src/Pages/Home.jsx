import React, { useState } from 'react'
import { TaskForm } from '../Components/Tasks/TaskForm'
import { TaskList } from '../Components/Tasks/TaskList'
import { useLocalStorage } from '../Modules/uselocalStorage'

export const Home = () => {
    const [tasks,setTasks] = useLocalStorage('tasks',[])
    const [text,setText] = useState("")
 const [list,setList] = useState([]);

    const setInputValue = (e)=>{
        e.preventDefault();
        setText(e.target.value);
      }
    
        const handleSubmit = (e)=>{
          e.preventDefault();
          const title = text;
          const id = Number(Date.now())
          console.log(text)
          if(text){
            setTasks([...tasks,{id,title,finish:false}])
          }else{
            alert("Debe agregar un titulo")
          }
          console.log("Llamando contadores al crear")
        //   finished()
        //   pending()
      }

    const handleStatus=(id)=>{

    }
    const handleEdit=(id)=>{

    }
    const handleDelete=(id)=>{
        setTasks(tasks.filter((task)=>{
            return task.id !== id
        }))
    }
  return (
    <div>
        <TaskForm handleSubmit={handleSubmit} setInputValue={setInputValue} text={text} />
        <TaskList tasks={tasks} handleStatus={handleStatus} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  ) 
}
