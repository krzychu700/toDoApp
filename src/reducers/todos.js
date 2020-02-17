const initialState = {
  categories:{
    defaultCategory: [{id: "32dsa", text: "test"}],
  },
  activeCategory: 'defaultCategory',
  test: 0,
}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const searchingCategory = state.activeCategory;
      return {...state, categories: {...state.categories,
        [searchingCategory]: [...state.categories[searchingCategory], {
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
    case 'ACTIVE_CATEGORY': {
      const newActiveCategory = action.name;
      console.log(newActiveCategory)
      return Object.assign({}, state, {
        activeCategory: newActiveCategory
      })
    }

    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   )
    default:
      return state
  }
}
export default todos