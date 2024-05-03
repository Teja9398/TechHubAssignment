import React from 'react'
import leftPannel from './LeftPannel'

function Lbutton(props) {
  return (
    <div className = "border-2 flex flex-col items-center p-4 justify-center bg-slate-50 rounded-lg text-gray-500 font-bold h-16 m-[5px] hover:bg-green-700 hover:text-white cursor:pointer">
      <span className='text-2xl'>{props.icon}</span>
      <span className='text-xs'>{props.name}</span>
    </div>
  )
}

export default Lbutton
