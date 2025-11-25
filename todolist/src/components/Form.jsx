import React, { useState } from 'react'

const Form = ({createTask}) => {
    const [tasks, setTasks] = useState([])

    const inputValue = () => {
        createTask(tasks)
        setTasks('')
    }
  return (
    <div>
        <div className='row mt-5'>
            <div className='col-8 offset-2'>
                <input value={tasks} onChange={ e => setTasks(e.target.value)}type='text' placeholder='Enter Task' className='form-control' />
            </div>
            <div className='col-2'>
                <button onClick={ () => inputValue()} type='button' className='btn btn-primary'><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Form