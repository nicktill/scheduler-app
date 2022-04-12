import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from "react";


function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Scheduler App</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />

    </div>
  );
}

export default App;
