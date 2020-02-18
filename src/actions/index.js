import uuid from 'react-uuid'
export const ADD_TODO = "ADD_TODO"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const ACTIVE_CATEGORY = "ACTIVE_CATEGORY"
export const TOGGLE_TODO = "TOGGLE_TODO"

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: uuid(),
    text,
  }
}

export function addCategory(text) {
  return {
    type: 'ADD_CATEGORY',
    id: uuid(),
    text,
  }
}

export function activeCategory(name) {
  return {
    type: 'ACTIVE_CATEGORY',
    name
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}