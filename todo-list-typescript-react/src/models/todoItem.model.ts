export type todoType={
    finished:boolean,
    content:string,
    id:number,
}
export type todoListProps={
    data:todoType[],
    deleteTodoItem:(id :number)=>void,
    handdleFinished:(id :number,finished:boolean)=>void
}
export type todoProps={
    data:todoType,
    deleteTodoItem:(id :number)=>void,
    handdleFinished:(id :number,finished:boolean)=>void
}
export type addTodoItemProps ={
    addTodoItem:(content:string)=>void
}
