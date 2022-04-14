import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from "react";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
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
