import React,{useState} from 'react';
import { TodoList } from './components/todoList';
import { ADDTodoItem } from './components/AddTodoItem';
import { LeftNav } from './components/leftNav';
import {todoType} from "./models/todoItem.model";

import "./index.css";
function App() {
  const [todos,setTodos]=useState<todoType[]>([
    // {id:1,content:"stydy",finished:false},
    // {id:2,content:"stydy",finished:false},
    // {id:3,content:"finished1",finished:true},
    // {id:4,content:"finished2",finished:true},
  ]);

  const addTodoItem =(content:string)=>{
    setTodos(prev=>{
      return [...prev,{id:Date.now(),content,finished:false}]
    })
  }

  const deleteTodoItem =(id:number)=>{
    setTodos(prev=>{
    let newTodos = [...prev];
    newTodos.splice(prev.findIndex(val=>val.id===id),1)
    return newTodos;
    })
  }

  const handdleFinished =(id:number,finished:boolean)=>{
    setTodos(prev=>{
      let index = prev.findIndex(val=>val.id===id);
      let newTodo = [...prev]
      newTodo[index].finished=finished;
      return newTodo;
      })
  }
  return (
    <div className='flex h-full'>
    <aside className=' min-h-screen h-auto bg-[#ff9e4f] w-40 text-white'><LeftNav/></aside>
    <div className='right flex-1'>
    <header className='flex items-end  justify-between  h-16 px-20 '>
      <span className='text-3xl'>Todo List</span>
      <span className='text-sm  text-zinc-600'>{new Date().getFullYear()+"/"+(+new Date().getMonth()+1)+"/"+(+new Date().getDate()+1)}</span></header>
      <div className='  text-2xl  h-1 bg-zinc-700'></div>
      <ADDTodoItem addTodoItem={addTodoItem}/>
      <TodoList data={todos} deleteTodoItem={deleteTodoItem} handdleFinished={handdleFinished}/>
    </div>
    </div>
  );
}

export default App;
