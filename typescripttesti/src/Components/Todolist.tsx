import React, { useState } from 'react';
import { Todo } from "../interfaces";
import Todotable from "./Todotable";


export default function Todolist() {
    const [todo, setTodo] = useState({
        desc: "",
        date: "",
        priority: ""
    });
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");

    const addTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ desc: "", date: "", priority: ""});
        setTitle1("Description")
        setTitle2("Date")
        setTitle3("Priority")
    }

    const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.target.name]: e.target.value});
    }

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((todo, i) => index !== i));

    }


    return (
        <div className="Todolist">
            <div className="header">
                <div className="inputContainer">
                    <input 
                        type="text" 
                        name="desc"
                        placeholder="Description"
                        value={todo.desc}
                        onChange={inputChanged}>
                    </input>

                    <input 
                        type="text" 
                        name="date"
                        placeholder="Date"
                        value={todo.date}
                        onChange={inputChanged}>
                    </input>

                    <input 
                        type="text" 
                        name="priority"
                        placeholder="Priority"
                        value={todo.priority}
                        onChange={inputChanged}>
                    </input>
                    <button onClick={addTodo}>Add</button>
                </div>
                <Todotable 
                todos={todos}
                title1={title1} 
                title2={title2} 
                title3={title3}
                deleteTodo={deleteTodo}
                />
            </div>
        </div>
    )
}
