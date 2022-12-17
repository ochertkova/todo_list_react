
import React, { useState } from 'react'


const TodoForm = ({ addTodo }) => {
    // props.addTodo
    const [todo, setTodo] = useState({
        name: '',
        description: ''
    });
    const handleNameChange = (e) => {
        setTodo({ ...todo, name: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setTodo({ ...todo, description: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault(); //prevents browser default submit functionality
        if (todo.name.trim()) {
            addTodo(todo)
            setTodo({
                name: '',
                description: ''
            });
        }
    }

    return (<form>
        <label>
            Name:
            <input label="Name"
                name="name"
                type="text"
                value={todo.name}
                onChange={handleNameChange}
            />
        </label>
        <br />
        <label>
            Description:
            <input label="Description"
                name="namedescription"
                type="text"
                value={todo.description}
                onChange={handleDescriptionChange}
            />
        </label>
        <br />
        <button onClick={handleSubmit}>Add Todo</button>
    </form>)
}

export default TodoForm;