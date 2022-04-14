import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        // filtering state our and trying to match the activity we clicked on
        setTodos(todos.filter(el => el.id !== todo.id));

    }
    const completeHandler = (item) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,

                };

            }
            // otherwise simply return the items
            return item
        }))
    }

    // const completeItems = (item) => {
    //     completedArray = []
    //     nonCompletedArray = []
    //     setTodos(todos.map(item => {
    //         // if user selects completed
    //         if (item.completed === true)
    //             console.log(item);
    //         // if user selects non completeed
    //     }))
    // }
    return (
        <div className="todo">
            <ul className={`todo-item ${todo.completed ? "completed" : ""} `}>{text}</ul>
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