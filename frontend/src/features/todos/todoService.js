import axios from 'axios'

const API_URL = '/api/todos/'

const createTodo = async (todoData) => {
  const res = await axios.post(API_URL, todoData)

  return res.data
}

const getTodos = async () => {
  const res = await axios.get(API_URL)

  return res.data
}

const deleteTodo = async (todoId) => {
  const res = await axios.delete(API_URL + todoId)

  return res.data
}

const todoService = {
  createTodo,
  getTodos,
  deleteTodo,
}

export default todoService
