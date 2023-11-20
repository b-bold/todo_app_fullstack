import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm/TodoForm';
import { ProgressBar } from '../ProgressBar';

export const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        timeSensitive: false,
        favorForSomeone: false,
        onSomeoneElseTodoList: false,
        hasMultipleSteps: false,
        willTake3MinOrLess: true,
        inProgress: false 
    });

    const submitUpdate = (
        value, 
        timeSensitive, 
        favorForSomeone, 
        onSomeoneElseTodoList,
        hasMultipleSteps,
        willTake3MinOrLess,
        inProgress
        ) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: value,
            timeSensitive: timeSensitive,
            favorForSomeone: favorForSomeone,
            onSomeoneElseTodoList: onSomeoneElseTodoList,
            hasMultipleSteps: hasMultipleSteps,
            willTake3MinOrLess: willTake3MinOrLess,
            inProgress: inProgress 
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div className='todo-label' key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>
            <ProgressBar/>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.title })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};




