import React from 'react'
import Todo from './Todo';

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

const TodoList = (props) => {
    const { todos, updateTodo, deleteTodo } = props

    return <table className="table">
        <tbody>{todos.map(todo => <Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
            { /* for each element of todos list call render Todo */}</tbody>
    </table>
};

export default TodoList