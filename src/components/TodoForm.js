import React from 'react';
import { useState } from 'react';

export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("")
        const handleSubmit = e => {
            e.preventDefault();
            addTodo(value);
            setValue("")
        }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}> 
            <input type="text" className='todo-input' value={value} placeholder="Jakie jest dzisiejsze zadanie?" onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Dodaj</button>
        </form>
    );
};