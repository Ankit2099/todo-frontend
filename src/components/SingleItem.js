import React from 'react'
import "font-awesome/css/font-awesome.min.css"

export default function SingleItem() {
  return (
    <div className='single-item-container'>
        <div>
            <span className='second'> Do Homework</span>
            
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
