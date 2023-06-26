const { getTodos, getTodo, createTodos, updateTodo, deleteTodo } = require("./Controller/Todo");

const router = require("express").Router();
router.get("/", (req, res) => {
    res.send("Hello World, yes here i'am man");
});

router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", createTodos);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;