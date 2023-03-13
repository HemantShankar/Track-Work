import React from 'react'
import { Todo_item } from "./Todo_item.js";

export const Todos = (props) => {
  return (
    <div className="Container">
      <h1>Tasks List</h1>
      <div className="scroll">
        {props.todos.length === 0 ? "No Task is listed" :
          props.todos.map((todo, index) => {
          return (
            <>
              <br />
              <Todo_item todo={todo} key={todo.title} onDelete={props.onDelete} serial={index + 1} /> <hr />
            </>)
        })}
      </div>
    </div>
  )
}
