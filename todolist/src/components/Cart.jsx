/* eslint-disable no-restricted-globals */
import React from 'react'

const Cart = ({userTask , deleteTask, updateTask, updateNewTask}) => {
    const confirmDelete = (task_id) => {
        if(confirm("Are you sure?")){
            deleteTask(task_id)
        }
    }

    const editTask = (task_id,task) => {
    
    let newValue = prompt("Enter new task: ",task)
    while (newValue!=null && newValue.trim()===""){
        alert("Please enter the new task!");
        newValue = prompt("Enter new task: ",task)
    }
    if (newValue === null) {
        return;
  }
    updateNewTask(task_id,newValue);

}

  return (
    <div>
        {userTask.map((task)=>(
            <div key={task.id} className={task.complete?'list-group-item shadow-sm mt-4 rounded bg-success bg-gradient text-decoration-line-through':"list-group-item shadow-sm mt-4 rounded"}>
            <div className='row'>
                <div className='col-9 offset-1'>
                    <input onChange={() => updateTask(task.id, !task.complete)} checked={task.complete} type='checkbox' className='me-5'/>
                    {task.task}
                </div>
                <div className='col-2'>
                    <i onClick={()=> {if(!task.complete)editTask(task.id,task.task)}} className="fa-solid fa-pen-to-square me-3"></i>
                    <i onClick={() => confirmDelete(task.id)}className="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
            </div>
        ))
        }    
    </div>
  )
}

export default Cart