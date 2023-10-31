import React from 'react'
import SingleItem from './SingleItem'

export default function MainContainer() {
  return (
    <div className='container list_container'>
        <div className='container form_container'>
            <h1 className='head'>Get Things Done !</h1>
            <div className='place'>
                <form>
                    <input className='task_input' type='text' placeholder='what is the task today?'/>
                    <input className='submit_task' type = 'submit' value='Add Task'/>
                </form>
                <SingleItem/>
            </div>
        </div>
    </div>
  )
}
