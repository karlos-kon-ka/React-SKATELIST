import React from 'react'
import { useState } from 'react';


function Creadortrucos(props) {
    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit =  (e) => {
      e.preventDefault();
      props.createNewTask(newTaskName);
      localStorage.setItem("tasks", newTaskName);
      setNewTaskName('')
  
   }
  return (
    <div>
       <form  className='formulario'  onSubmit={handleSubmit}>
      <input value={newTaskName} placeholder='Ingresa tus trucos' type='text' onChange={(e) => setNewTaskName(e.target.value) }  ></input>
       <button >Enviar</button>
      </form>
    </div>
  )
}

export default Creadortrucos
