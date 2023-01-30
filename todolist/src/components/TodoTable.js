function TodoTable({ todos, title1, title2, deleteTodo }) {

    return (
        <div className="TodoTable">
            <table>
                <tbody>
                    <tr><th>{title1}</th><td></td><th>{title2}</th></tr>
                    { todos.map((todo, index) => 
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td></td>
                            <td>{todo.desc}</td>
                            <td></td>
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </tr>)
                        }
                </tbody>
            </table>
        </div>
    );
}
export default TodoTable;