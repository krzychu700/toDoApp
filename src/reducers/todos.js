const initialState = {
  defaultCategory: [],
  test: 0,
}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const category = action.category;
      const searchingCategory = Object.keys(state).find(key => key === category)
      console.log(searchingCategory)
      return Object.assign({}, state,
        {defaultCategory: [...state.defaultCategory,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]})
    }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}
export default todos