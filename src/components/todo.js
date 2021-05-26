import React,{useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addTodo, deleteTodo, clearTodos} from "../actions/index";
import './todo.css';

const Todo = () => {

    const [inputTodo, setInputTodo] = useState([]);
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
        <input 
            placeholder="📋🖋  Write a ToDo" 
            type="text" 
            value={inputTodo} 
            onChange={(event) => {
                const newTodo=event.target.value;
                setInputTodo(newTodo)
            }}
        />
        <button onClick={() => dispatch(addTodo(inputTodo), setInputTodo("")) } >
            <span>Add</span>
        </button>
        </div>
        <div>
            {list.map((todo) => {
                return (
                    <div key={todo.id} style={{display:'flex', justifyContent: 'space-between'}}>
                        <li>{todo.data}</li>
                        <button onClick={() => dispatch(deleteTodo(todo.id)) } >
                            <span> 🗑 </span>
                        </button>
                    </div>
                    )
                }
            )}
        </div>

        <div>
            <button className="checklist" style={{marginTop:"50px"}} onClick={() => dispatch(clearTodos())}>
                <span style={{background: "#6ddccf"}}>✓ Check List</span>
            </button>
        </div>

        </div>
    );
    }

export default Todo