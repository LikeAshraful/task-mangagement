const { getTodos, getTodo, createTodos, updateTodo, deleteTodo } = require("./Controller/Todo");
const { registerValidation, register, loginValidation, login } = require("./Controller/LoginController");

const router = require("express").Router();
router.get("/", (req, res) => {
    res.send("Hello World, yes here i'am man from node crud project");
});

router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.post("/todos", createTodos);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

//user auth routes 
router.post("/register", registerValidation, register);
router.post("/login", login);
// router.get("/logout", logout);


module.exports = router;