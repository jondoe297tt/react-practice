import React,{FC, useRef} from 'react'
import {MdOutlineCancelPresentation} from "react-icons/md"
import { todoProps } from '../models/todoItem.model'
import { isNullishCoalesce } from 'typescript';
export const TodoItem:FC<todoProps> = ({data,deleteTodoItem,handdleFinished}) => {
  const checkref=useRef<HTMLInputElement>(null);
  const  handleDeleteClick=()=>{
    deleteTodoItem(data.id);
  }
  const handleCheck=()=>{
    // console.log(data,checkref.current!.checked)
    handdleFinished(data.id,checkref.current!.checked)
  }
  return (
    <div className='w-[25rem]  flex rounded-xl px-5 justify-between items-center h-10 my-2 shadow-sm shadow-neutral-700 '>
      <input type="checkbox" className="form-checkbox h-4 w-4  checkbox"  ref={checkref} onChange={handleCheck}/>
        <span>{data.content}</span>
        <MdOutlineCancelPresentation className='text-red-500 text-xl cursor-pointer'  onClick={handleDeleteClick}/>
    </div>
  )
}
