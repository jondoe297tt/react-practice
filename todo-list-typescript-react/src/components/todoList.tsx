import React,{FC, useState} from 'react';
import { TodoItem } from './todoItem';
import { FinishedItem } from './finishedItem';
import {todoListProps,todoType} from "../models/todoItem.model"
export const TodoList:FC<todoListProps> = ({data,deleteTodoItem,handdleFinished}) => {
  
    const finishedArr:Array<todoType>=[];
    const needToDoArr:Array<todoType>=[];
    data.forEach(todo=>{
      if(todo.finished){
        finishedArr.push(todo);
      }else{
        needToDoArr.push(todo);
      }
    })
  
  return (
    <div className='flex justify-center items-center flex-col bg-white w-[30rem] mx-auto py-8 shadow-sm	rounded-2xl'>
      <h2 className='text-[#ffaf42] font-bold text-2xl'>todo</h2>
      {(finishedArr.length===0&&needToDoArr.length===0 )? "设置你的第一个任务把" :
      needToDoArr.length===0?"已完成所有任务,快制定下一个任务把！":needToDoArr.map(val=> <TodoItem data={val}   key={val.id} deleteTodoItem={deleteTodoItem} handdleFinished={handdleFinished}/>)}
      <h2 className='text-[#ffaf42] mt-6 font-bold text-2xl'>finished</h2>
      {finishedArr.map(val=> <FinishedItem data={val} key={val.id} deleteTodoItem={deleteTodoItem} handdleFinished={handdleFinished}/>)}
      </div>
  )
}
