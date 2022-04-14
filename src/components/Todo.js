import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
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

const removeItem = ({ id }) => {

}

export default Todo