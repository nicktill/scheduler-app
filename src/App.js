import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Scheduler App</h1>
      </header>
      <Form />
      <TodoList />

    </div>
  );
}

export default App;
