import './App.css'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [todos, setTodos] = useState([])

  const updateTodo = (updatedTodo) => {
    setTodos(
      // copy all todos one by one except updated which are replaced by new
      todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    )
  }
  const deleteTodo = (deletedTodo) => {
    setTodos(
      todos.filter(todo => todo.id !== deletedTodo.id) //true if next element is not a todo to delete
    )
  }
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
      <button type="button" className="btn btn-primary" onClick={toggleFormVisible}>
        {formVisible ? "Cancel" : "Add Todo"}
      </button>
      {formVisible && <TodoForm addTodo={addTodo} />}
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
