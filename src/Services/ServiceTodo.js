import api from './api'

export const getAll = async () => {
  const res = await api.get('/todos')
  return res.data
}

export const getTodo = async id => {
  const res = await api.get(`/todos/${id}`)
  return res.data
}

export const createTodo = async todo => {
  const res = await api.post('/todos', todo)
}

export const deleteTodo = async id => {
  await api.delete(`/todos/${id}`)
}

export const updateTodo = async (id, todo) => {
  const res = await api.put(`/todos/${id}`, todo)
  return res.data
}
