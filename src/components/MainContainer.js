import React, { useEffect, useState } from 'react'
import SingleItem from './SingleItem'

export default function MainContainer() {
  const [task, set_task] = useState("")

  const handleInputChange = (event) => {
    set_task(event.target.value)
  }

  const [task_list, set_task_list] = useState([])

  const handleSubmit = (event) =>{
    event.preventDefault()
    // console.log("button clicked", task);
    fetch("http://127.0.0.1:8000/save/", {
      method: 'POST',
      headers : {
        "content-type" : 'application/json'
      },
      body : JSON.stringify({"task_name": task})

    }).then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch(error =>{
      console.log(error);
    } )
  }

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/get_task/", {
      method: "GET",
      headers :  {
        "content-type" : 'application/json'
      },

    }).then(response => response.json())
    .then(data => {
      console.log(data);
      set_task_list(data)
    }).catch(error => {
      console.log(error);
    })
  }, [task])
  return (
    <div className='container list_container'>
        <div className='container form_container'>
            <h1 className='head'>Get Things Done ! {task}</h1>
            <div className='place'>
                <form onSubmit={handleSubmit}>
                    <input className='task_input' type='text' onChange={handleInputChange} value={task} placeholder='what is the task today?'/>
                    <button className='submit_task' > Add Task </button>
                </form>
                {task_list.map((element, index)=>(
                    <SingleItem task_name = {element.task_name} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}
