import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from "react";


function App() {

  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(['all']);
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when app starts to get info
  useEffect(() => {
    getLocalTodos()
  }, [])  // empty array since only runs once

  //use effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // save to storage saving
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      localStorage.setItem('todos', JSON.stringify([todos]));
    }
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      localStorage.getItem('todos', JSON.stringify([todos]));
    }

  }
  return (
    <div className="App">
      <header>
        <h1>/scheduler </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <p class="alginTopLeft"><a href="https://nicktill.github.io"> Created by NickTill </a> </p>

    </div>
  );
}

export default App;
