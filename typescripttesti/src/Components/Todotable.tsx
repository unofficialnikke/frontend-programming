import React, { useState } from 'react';
import { Todo } from "../interfaces";

interface PropsTodo {
    todos: Array<Todo>
    title1: string
    title2: string
    title3: string
    deleteTodo: (index: number) => void;

}

export default function Todotable(props: PropsTodo) {

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <table>
                <tbody>
                    <tr><th>{props.title1}</th><th>{props.title2}</th><th>{props.title3}</th></tr>

                    { 
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <button onClick={() => props.deleteTodo(index)}>Delete</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
