const initialState = {
  categories:{
    default: [],
  },
  deleted: [],
  activeCategory: 'default',
}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const searchingCategory = state.activeCategory;
      return {...state, categories: {...state.categories,
        [searchingCategory]: [...state.categories[searchingCategory], {
          id: action.id,
          text: action.text,
          completed: false,
          deleted: false
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
      return Object.assign({}, state, {
        activeCategory: newActiveCategory
      })
    }

    case 'TOGGLE_TODO':
      return {...state, categories: {...state.categories,
        [action.category]: state.categories[action.category].map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )}}

    case 'DELETE_TASK': {
      const filteredTasks = state.categories[action.category].filter(task => task.id !== action.id)
      const deletedTask = state.categories[action.category].filter(task => task.id === action.id)

      return {...state,
        categories: {...state.categories,
        [action.category]:  filteredTasks
        },
        deleted: [...state.deleted, {
          id: deletedTask[0].id,
          text: deletedTask[0].text,
          completed: deletedTask[0].completed,
          deleted: true
        }]}
        }
    default:
      return state
  }
}
export default todos