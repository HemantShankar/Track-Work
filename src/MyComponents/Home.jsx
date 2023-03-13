import React, { useState, useEffect } from 'react';

import sample from "../v4u.mp4";
import { Todos } from "./Todos.js";
import { AddTodo } from "./AddTodo";


const Home = () => {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        console.log("I am on Delete", todo);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title, des) => {
        console.log("I am adding this task", title, des)

        const myTodo = {
            title: title,
            des: des,
        }
        setTodos([...todos, myTodo]);
    }

    var [todos, setTodos] = useState(initTodo);  //This hook state method will help to delete items from the todos
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div className='cover'>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            
        </div>
    )
}

export default Home