import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        // filtering state our and trying to match the activity we clicked on
        setTodos(todos.filter(el => el.id !== todo.id));

    }
    const completeHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));

    }
    return (
        <div className="todo">
            <ul className="todo-item">{text}</ul>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"> </i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"> </i>
            </button>
        </div >
    )
}

export default Todo