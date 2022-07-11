const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')

// @desc    Get todos
// @route   GET /api/todos
// @access  Public
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ })

  res.status(200).json(todos)
})

// @desc    Set todo
// @route   POST /api/todos
// @access  Public
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please enter a to-do')
  }

  const todo = await Todo.create({
    text: req.body.text
  })

  res.status(200).json(todo)
})

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Public
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('To-do not found')
  }

  await todo.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTodos,
  setTodo,
  deleteTodo,
}