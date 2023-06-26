const req = require("express/lib/request");
const res = require("express/lib/response");
const Todo = require("../Model/Todo");



const getTodos = (req, res) => {
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving todos' });
        });
};

const getTodo = (req, res) => {
    const { id } = req.params;

    Todo.findById(id)
        .then((todo) => {
            res.json(todo);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving todo' });
        });
};

const createTodos = (req, res) => {

    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    todo.save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
}

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true })
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error updating todo' });
        });
}

const deleteTodo = (req, res) => {
    const { id } = req.params;

    Todo.findByIdAndDelete(id)
        .then(res.json({ message: 'Todo deleted' }))
        .catch((error) => {
            res.status(500).json({ error: 'Error deleting todo' });
        });

}


module.exports = {
    getTodos,
    getTodo,
    createTodos,
    updateTodo,
    deleteTodo
};
