import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const todo = await Todo.create({ text: req.body.text });
  res.json(todo);
};

export const toggleTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
};
