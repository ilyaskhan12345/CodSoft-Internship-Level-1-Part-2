import React, { useState } from 'react';

import { FiTrash2 } from "react-icons/fi";

import { FaEdit } from 'react-icons/fa';


const TodoInput = () => {
    const[text , setText] = useState("");
    const[tasks , setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

 

    const addTask = () => {
      if (text.trim() !== "") {
        if (editIndex !== null) {
    
          const updatedTasks = [...tasks];
          updatedTasks[editIndex] = text;
          setTasks(updatedTasks);
          setEditIndex(null); 
        } else {
     
          setTasks([...tasks, text]);
        }
  
        setText('');
      }
    };

 
    const deleteTask = (index) => {
      const newTasks = [...tasks];
      // console.log(index);
         newTasks.splice(index, 1);
      setTasks(newTasks);
    };

   
    
    const editTask = (index) => {
      const editedTask = tasks[index];
      setText(editedTask);
      setEditIndex(index);
    };


    const clearTask = () => {
      setTasks([])
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    };
  


  return (
    <div className='container'>
      <div className='shad'>
        <h1 className='heading'>My Todo List </h1>
         <div className='input-btn'>
            <input className='input-field' type='text' value={text} placeholder='Enter Your Task' onKeyDown={handleKeyDown} onChange={(e) => setText(e.target.value)} />
            <button className='btn' onClick={addTask}>Add Task</button>
            <button className='clr' onClick={clearTask}>Clear All</button>
            <ul>
            {tasks.map((task, index) => (
              <li className='list' key={index}>
                {task}
                {/* <button onClick={() => editTask(index)}>Edit</button> */}
                <span className='edit'><FaEdit onClick={() => editTask(index)} /></span>
                <span className='bin'><FiTrash2 onClick={() => deleteTask(index)}/></span>
               
              </li>
            ))}
          </ul>

            {/* <ul>
              {
                tasks.map((task,index) => (
                  <li className='list' key={index} >{task}</li>
                 
                ))
              }
             
            </ul> */}
         </div>
         </div>
    </div>
  )
}

export default TodoInput;