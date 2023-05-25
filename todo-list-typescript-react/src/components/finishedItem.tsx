import React, { FC ,useRef} from 'react';
import {todoProps} from "../models/todoItem.model";
import { MdOutlineCancelPresentation } from 'react-icons/md';
import "./finishedItem.css"
export const FinishedItem:FC<todoProps> = ({data,deleteTodoItem,handdleFinished}) => {
  const  handleDeleteClick=()=>{
    deleteTodoItem(data.id);
  }
  const checkref=useRef<HTMLInputElement>(null);
  const handleCheck=()=>{
    // console.log(data,checkref.current!.checked)
    handdleFinished(data.id,checkref.current!.checked)
  }
  return (
    <div className='finishedItem w-[25rem]  flex rounded-xl px-5 justify-between items-center h-10 my-2 shadow-sm shadow-neutral-700 bg-neutral-200'>
              <input type="checkbox" className="form-checkbox h-4 w-4  checkbox"  ref={checkref} onChange={handleCheck} checked={data.finished}/>
        <span>{data.content}</span>
        <MdOutlineCancelPresentation className='text-red-500 text-xl cursor-pointer' onClick={handleDeleteClick} />
    </div>
  )
}
