import api from './api'

export const getAll = async () => {
  const res = await api.get('/todos')
  return res.data
}

export const createTodo = async todo => {
  const res = await api.post('/todos', todo)
}

export const updateTodo = async () => {}

export const deleteTodo = async () => {}
