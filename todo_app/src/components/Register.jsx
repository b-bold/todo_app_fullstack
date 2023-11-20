import React, { useState } from "react"
import TodoList from "./Todo/TodoList";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [goTodoListPage, setGoTodoListPage] = useState(false)



    const handleInputChange = (event) => {
        if (event.target.name === 'firstName'){
            setFirstName(event.target.value)
        } 
       
        if (event.target.name === 'lastName') {
            setLastName(event.target.value)
        } 
       
        if (event.target.name === 'username') {
            setUsername(event.target.value)
        } 
        
        if (event.target.name === 'email'){
            setEmail(event.target.value)
        }
        
        if (event.target.name === 'password'){
            setPass(event.target.value) 
        } 
        
        if (event.target.name === 'age'){
            setAge(event.target.value)
        }
    }

    // TODO: once user info is saved, 
    // i want to hit the API and check the result
    const fetchResponse = async () => {
        const userInfo = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "username": username,
            "age": age,
            "pass": pass
        }

        const result = await fetch('https://dummyjson.com/users/add', {
            // mode: 'no-cors',

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })

        const resultInJson = await result.json()
        console.log(resultInJson)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setGoTodoListPage(true)
    }

    const formSwitch = () => {
        props.onFormSwitch('login')
    }

    return (
        <div>
            {(goTodoListPage) ?
                <TodoList />
            : 
                <div className="auth-form-container"> 
                    <h2> Register </h2>  
                    <form className="register-form" onSubmit={handleSubmit}>
                        <input value={firstName} required name="firstName" type="text" id="1" placeholder="first name" onChange={handleInputChange} />
                        <input value={lastName} required name="lastName" id="2" placeholder="last name" onChange={handleInputChange} />
                        <input value={username} required name="username" id="3" placeholder="username" onChange={handleInputChange} />
                        <input value={email} required name="email" type="email" placeholder="youremail@gmail.com"  onChange={handleInputChange} />
                        <input value={pass} required name="password" type="password" placeholder="password" onChange={handleInputChange} />
                        <input value={age} required name="age" type="age" placeholder="age" onChange={handleInputChange} />
                        <button className='login-btn' onClick={fetchResponse}>Log In</button>
                    </form>
                    <button className='register-btn' onClick={formSwitch}>Login Here </button>
                </div>
            }
        </div>
    )
}