import './App.css'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const nextId = todos.length + 1
    todo.id = nextId
    setTodos([todo, ...todos])
  }

  const [formVisible, setFormVisible] = useState(false)

  const toggleFormVisible = (e) => {
    e.preventDefault();
    setFormVisible(formVisible ? false : true)
  }

  return (
    <div className="App">
      <header className='App-Header'>
        <p>ToDo list</p>
      </header>
      <button onClick={toggleFormVisible}>
        {formVisible ? "Cancel" : "Add Todo"}
      </button>
      {formVisible && <TodoForm addTodo={addTodo} />}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
