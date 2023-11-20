import React, { useState } from "react"

export const TodoForm = (props) => {
    const [input, setInput] = useState('')
    const [isExistingTask, setIsExistingTask] = useState(false)

    const handleChange = e => {
        setInput(e.target.value)
        if (e) 
            {setIsExistingTask(true)
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            title: input
        })
        console.log(props)

        setInput('');
    }


    return (
        <div>
            {(!isExistingTask) ? 
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input 
                        className="todo-input" 
                        type="text" 
                        placeholder="add a todo" 
                        value={input} 
                        name="text"
                        onChange={handleChange}
                    />
                        <button className="todo-button">Add Todo</button>
                </form>
                : 
                <form className="todo-edit-form" onSubmit={handleSubmit}>
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="update title of todo"
                        value={input}
                        name="text"
                        onChange={handleChange}
                    />
                    <button className="todo-button">Update Todo</button>
                </form>
            }
        </div>
    )
}

export default TodoForm;