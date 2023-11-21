
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
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

// app.post('todos/:id', (req, res) => {
//     let.push 
//     res.json([]);
// })

// app.delete('todos/:id', (req, res) => {
//     res.json([]);
// })

app.listen(port, () => {
    console.log('app is listening in Port:', port);
})