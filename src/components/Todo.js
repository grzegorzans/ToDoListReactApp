import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoInfo from './TodoInfo';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, updateInfo, activeTaskId, setActiveTaskId}) => {
  const isInfoVisible = activeTaskId === task.id;

  return (
    <div className="Todo">
      <div className="todo-header">
        <p className={`${task.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className="todo-actions">
          <TodoInfo task={task} updateInfo={updateInfo} isActive={isInfoVisible} setActiveTaskId={setActiveTaskId}/>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="edit-icon"/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="delete-icon"/>
        </div>
      </div>
    </div>
  );
};