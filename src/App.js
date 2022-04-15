import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from "react";


function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      case 'all':
        setFilteredTodos(todos.filter(todos))
        break
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
      />
      <TodoList todos={todos} setTodos={setTodos} />
      <p class="alginTopLeft"><a href="https://nicktill.github.io"> Created by NickTill </a> </p>

    </div>
  );
}

export default App;
