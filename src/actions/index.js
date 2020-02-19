import uuid from 'react-uuid'
export const ADD_TODO = "ADD_TODO"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const ACTIVE_CATEGORY = "ACTIVE_CATEGORY"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TASK = "DELETE_TASK"

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

export function toggleTodo(id, category) {
  return {
    type: 'TOGGLE_TODO',
    id,
    category
  }
}

export function deleteTask(id, category) {
  return {
    type: 'DELETE_TASK',
    id,
    category
  }
}