import React from 'react'

// const [todos, setTodos] = useState([{
//     id: 'todo1',
//     description: 'Todo1 description',
//     name: 'Todo1 name',
//     status: 'NotStarted'
// }, {
//     id: 'todo2',
//     description: 'Todo2 description',
//     name: 'Todo2 name',
//     status: 'NotStarted'
// }]); 
const Todo = (props) => {
    const { name, description } = props.todo
    return <tr><td>{name}</td><td>{description}</td></tr>
}

const TodoList = (props) => {
    const todos = props.todos

    return <table>
        <tbody>{todos.map(todo => <Todo key={todo.id} todo={todo} />)}{ /* for each element of todos list call render Todo */}</tbody>
    </table>
};

export default TodoList