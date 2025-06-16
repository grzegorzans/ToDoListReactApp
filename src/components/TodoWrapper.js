import React from 'react';
import { TodoForm } from './TodoForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons';
uuidv4();

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([]);
        const [activeTaskId, setActiveTaskId] = useState(null);
        const addTodo = todo => {
            setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false, info: ''}])
        }
        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }
        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }
        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
        }
        const editTask = (task, id) => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
        }
        const updateInfo = (id, newInfo) => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, info: newInfo } : todo));
        }
    return (
        <div className='TodoWrapper'>
            <h1>Co masz zrobić jutro </h1>
            <h1>zrób lepiej już dziś <FontAwesomeIcon icon={faFaceSmileWink} /> </h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} updateInfo={updateInfo} activeTaskId={activeTaskId} setActiveTaskId={setActiveTaskId}/>
                )
                
            ))}
        </div>
    );
};