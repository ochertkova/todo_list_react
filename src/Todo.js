import React, { useState } from 'react'

const Todo = (props) => {

    const [isEditable, setIsEditable] = useState(false)
    const { todo, updateTodo, deleteTodo } = props

    const toggleEditable = (e) => {
        e.preventDefault();
        setIsEditable(isEditable ? false : true)
    }

    const handleNameChange = (e) => {
        e.preventDefault()
        updateTodo({ ...todo, name: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        e.preventDefault()
        updateTodo({ ...todo, description: e.target.value })
    }
    const handleStatusChange = (e) => {
        e.preventDefault()
        updateTodo({ ...todo, status: e.target.value })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteTodo(todo)
    }

    if (!isEditable) {
        return <tr onClick={toggleEditable}><td>{todo.name}</td><td>{todo.description}</td><td>{todo.status}</td></tr >
    }
    return <tr>
        <td><input defaultValue={todo.name} onChange={handleNameChange} /></td>
        <td><input defaultValue={todo.description} onChange={handleDescriptionChange} /></td>
        <td>
            <select defaultValue={todo.status} onChange={handleStatusChange}>
                <option value="NotStarted">Not Started</option>
                <option value="OnGoing">Ongoing</option>
                <option value="Completed">Completed</option>
            </select>
            <button onClick={toggleEditable}>Close</button>
            <button onClick={handleDelete}>Delete</button>
        </td>

    </tr>
}

export default Todo