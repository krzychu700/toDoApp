import uuid from 'react-uuid'
export const ADD_TODO = "ADD_TODO"
export const ADD_CATEGORY = "ADD_CATEGORY"

export function addTodo(text, category = "defaultCategory") {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    text,
    category
  }
}

export function addCategory(text) {
  return {
    type: 'ADD_CATEGORY',
    id: uuid(),
    text,
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

