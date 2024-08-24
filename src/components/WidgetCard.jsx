import React from 'react'
import initialData from "../data/initialData.json"
import { FaPlus } from "react-icons/fa6";

function WidgetCard() {


  return (
    <div>
        {initialData.categories.map((cat, id) => (
          <div className='flex flex-col justify-between' key={id}>
            
            <span className='mx-16 px-5 font-bold'>{cat.name}</span>
            <span className=' p-5 flex flex-row mx-16'> {cat.widgets.map((wid,id) => (
              <div className=' border-2 rounded-lg w-[24rem] h-[12rem] bg-slate-400 mx-4' key={id}>
                <h2 className='m-2 font-bold'>{wid.name}</h2>
                <span>content: {wid.content}</span>
                
              </div>
            ))} 
            <div className=' border-2 rounded-lg w-[24rem] h-[12rem] bg-slate-400 mx-4 flex justify-center' key={id}>
                <button className=' flex flex-row my-auto'><FaPlus className='my-1 mx-1'/>  Add Widget</button>
              </div>
            </span>

          </div>

        ))}

    </div>
  )
}

export default WidgetCard