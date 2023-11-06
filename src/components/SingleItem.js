import React from 'react'
import "font-awesome/css/font-awesome.min.css"

export default function SingleItem(props) {
  console.log(props.task_name);
  return (
    <div className='single-item-container'>
        <div>
            <span className='second'> {props.task_name}</span>
            
            <button> <i className="fa-regular fa-pen-to-square"></i> </button> 
            <button> <i className="fa-solid fa-trash"></i> </button>
        </div>
        {/* <div>
            <button> <i class="fa-solid fa-trash"></i> </button>
            <button> button 2 </button> 
        </div> */}
    </div>
  )
}
