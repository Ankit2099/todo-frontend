import React from 'react'
import "font-awesome/css/font-awesome.min.css"

export default function SingleItem() {
  return (
    <div className='single-item-container'>
        <div>
            <span> Do Homework</span>
            <button> <i class="fa-solid fa-trash"></i> </button>
            <button> button 2 </button> 
        </div>
        {/* <div>
            <button> <i class="fa-solid fa-trash"></i> </button>
            <button> button 2 </button> 
        </div> */}
    </div>
  )
}
