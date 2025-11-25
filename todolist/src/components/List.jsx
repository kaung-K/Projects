import React from 'react'
import Cart from "./Cart"
const List = ({userTask, deleteTask, updateTask, updateNewTask}) => {
  return (
    <div>
        <ol className='list-group'>
            <Cart userTask={userTask} deleteTask={deleteTask} updateTask={updateTask} updateNewTask={updateNewTask}/>
        </ol>
    </div>
  )
}

export default List