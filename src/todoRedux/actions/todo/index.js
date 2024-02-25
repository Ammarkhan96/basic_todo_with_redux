let nextTodoItems = 0;

export const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoItems++,
  text,
})

export const deleteTodos = (id) => ({
  type: 'DELETE_TODO',
  id,
})

export const updateTodos = (id, text) => ({
  type: 'UPDATE_TODO',
  id,
  text,
})
