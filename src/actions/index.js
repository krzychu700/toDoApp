export const ADD_TODO = "ADD_TODO"

let nextTodoId = 0
export function addTodo(text, category = "defaultCategory") {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    category
  }
}
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

