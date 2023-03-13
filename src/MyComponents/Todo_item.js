import React from 'react'

export const Todo_item = ({todo, onDelete, serial}) => {
  return (
    <div>
        <h4>({serial}) {todo.title}</h4>
        <p>{todo.des}</p>
        <buttton className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</buttton>
    </div>
  )
}
