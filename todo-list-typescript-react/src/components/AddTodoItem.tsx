import React,{useRef,FC, FormEvent} from 'react';
import {addTodoItemProps} from "../models/todoItem.model"
export const ADDTodoItem :FC<addTodoItemProps>= ({addTodoItem}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddClick=(e:FormEvent)=>{
    e.preventDefault();
    const inputValue= inputRef.current!.value.trim();
    if(!inputValue) return ;
    addTodoItem(inputRef.current!.value);
    inputRef.current!.value="";
  }
  
  return (
    <form className='flex justify-center items-center my-4'>
      <input type="text" className='mx-4 border-2 border-blue-200 pl-3 rounded-md w-96 h-10' ref={inputRef} placeholder='Add Todo'/>
     <button className=' text-md text-white bg-[#0077c2] px-6 py-2 rounded-md ' onClick={handleAddClick}>提交</button>
    </form>
  )
}
