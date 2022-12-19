
import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    // props.addTodo
    const [todo, setTodo] = useState({
        name: '',
        description: '',
        status: 'NotStarted'
    });
    const handleNameChange = (e) => {
        setTodo({ ...todo, name: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setTodo({ ...todo, description: e.target.value })
    }
    const handleStatusChange = (e) => {
        setTodo({ ...todo, status: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault(); //prevents browser default submit functionality
        if (todo.name.trim()) {
            addTodo(todo)
            setTodo({
                name: '',
                description: '',
                status: 'NotStarted'
            });
        }
    }

    return (<form>
        <br />
        <div className="input-group mb-3">
            <label htmlFor="name" className="input-group-text" id="inputGroup-sizing-default">Name:</label>
            <input label="Name"
                name="name"
                value={todo.name}
                onChange={handleNameChange}
                type="text" className="form-control" aria-label="name" aria-describedby="inputGroup-sizing-default"
            />
        </div>
        <div className="input-group mb-3">
            <label htmlFor="description" className="input-group-text" id="inputGroup-sizing-default">Description:</label>
            <input label="Description"
                name="description"

                value={todo.description}
                onChange={handleDescriptionChange}
                type="text" className="form-control" aria-label="description" aria-describedby="inputGroup-sizing-default"
            />
        </div>
        <div className="input-group mb-3">
            <label htmlFor="status" className="input-group-text" id="inputGroup-sizing-default">Status:</label>
            <select value={todo.status} onChange={handleStatusChange}>
                <option value="NotStarted">Not Started</option>
                <option value="OnGoing">Ongoing</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
        <br />
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Todo</button>
    </form >)
}

export default TodoForm;