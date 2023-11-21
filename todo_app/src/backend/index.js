
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const uuid = require("uuid")
const port = process.env.port || 3000
app.use(bodyParser.json())

const todos = [
    {
        id: 1,
        desc: "write python code",
        completed: true
    },
    {
        id: 2,
        desc: "write ruby code",
        completed: true

    }
];

app.get('/', (req, res, next) => {
    res.send('<h1>ToDo List HomePage<h1>')
})

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.get('/todos/:id', (req, res) => {
    console.log(req.params.id);
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
})

app.post('/todos', (req, res) => {
    let body = req.body;
    todos.push({id: uuid.v4(), ...body});
    res.json((todos));
})
// not working. getting error in postman. using this tutorial: 
// https://www.youtube.com/watch?v=2u8VAAyvFv0
// app.put('todos/:id', (req, res) => {
//     let todo = todos.find(todo => todo.id == req.params.id)
//     if (todo) {
//         todo.desc = req.body.desc;
//         todo.completed = req.body.completed;
//         console.log(todo)
//         res.json(todos);
//     } else {
//         res.send("Todo with given id doesn't exist")
//     }
// })

app.delete('todos/:id', (req, res) => {
    res.json([]);
})

app.listen(port, () => {
    console.log('app is listening in Port:', port);
})