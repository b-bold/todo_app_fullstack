import React, { useState } from 'react';
import { Todo } from './Todo'
import TodoForm from './TodoForm/TodoForm'

function TodoList() {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                title: 'Learn React',
                priority: 'high',
                timeSensitive: true,
                favorForSomeone: false,
                onSomeoneElseTodoList: true,
                hasMultipleSteps: true,
                willTake3MinOrLess: false,
                inProgress: false
            },
            {
                id: 5,
                title: 'Find Cardi Quote About the Cold',
                priority: 'medium',
                timeSensitive: false,
                favorForSomeone: false,
                onSomeoneElseTodoList: false,
                hasMultipleSteps: false,
                willTake3MinOrLess: true,
                inProgress: false
            },
        ]
    );

    const addTodo = todo => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }; 

    const updateTodo = (todoId, newValue) => {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1>Welcome</h1>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;