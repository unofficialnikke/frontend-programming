import React, { useState } from "react";
import TodoTable from "./TodoTable";

function Todolist() {
    const [todo, setTodo] = useState({desc: "", date: ""});
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [todos, setTodos] = useState([]);
    
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTitle1("Date");
        setTitle2("Description");
    }

    const inputChanged = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    function deleteTodo(index) {
        const newTodo = todos.filter((todo, i) => i !== index);

        setTodos(newTodo);
    }

    return(
        <div className="Todolist">
            <p>Add todo: </p>
            <label>Description: </label>
            <input 
                type="text"
                name="desc"
                value={todo.desc} 
                onChange={inputChanged}
            />
            <label>Date: </label>
            <input
                type="text"
                name="date"
                value={todo.date}
                onChange={inputChanged}
            />
            <button onClick={addTodo}>Add</button>

            <TodoTable 
            todos={todos}
            title1={title1}
            title2={title2}
            deleteTodo={deleteTodo}
            />
        </div>
    );
}
export default Todolist;