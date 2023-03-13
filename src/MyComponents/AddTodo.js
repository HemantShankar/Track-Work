// import React from 'react'
import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description can't be empty")
        }
        else{
            addTodo(title, des);
            setTitle("");
            setDes("");
        }
    }

    return (
        <div className='FormContainer'>
            <h1>Add Task</h1>
            <br />
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label htmlFor="title" className="htmlForm-label">Your Task</label>
                    <input type="text" value={title} onChange= {(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="titleDes" className="form-text">We'll show you all your work for the day.</div>
                </div>
                <div className="mb-1">
                    <label htmlFor="des" className="form-label">Description of the task</label>
                    <input type="text" value={des} onChange= {(e)=>{setDes(e.target.value)}} className="form-control" id="des" />
                </div>
                {/* <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Need Reminder</label>
                </div> */}
                <button type="submit" className="btn btn-primary" id="submit_button">Submit</button>
            </form>
        </div>
    )
}
