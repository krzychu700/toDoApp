const initialState = {
  categories:{
    defaultCategory: [],
  },
  test: 0,
}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const category = action.category;
      const searchingCategory = Object.keys(state.categories).find(key => key === category)
      return {...state, categories: {[searchingCategory]: [...state.categories[searchingCategory], {
          id: action.id,
          text: action.text,
          completed: false
      }]}
      }
    }
    case 'ADD_CATEGORY': {
      const newCategory = action.text;
      return Object.assign({}, state, {
        ...state.categories[Object.assign(state.categories, {
          [newCategory]: []
        })]
      })
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