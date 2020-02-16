import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoryName: ''
    }
  }

  handleInputTextAdd = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value
    })
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (!this.state.inputValue.trim()) {
      return
    }
    this.props.actions.addTodo(this.state.inputValue);
    this.setState({
      inputValue:''
    })
  }

  handleInputCategoryAdd = (e) => {
    const { value } = e.target;
    this.setState({
      categoryName: value
    })
  };

  handleSubmitCategoryForm = (e) => {
    e.preventDefault();
    if (!this.state.categoryName.trim()) {
      return
    }
    this.props.actions.addCategory(this.state.categoryName);
    this.setState({
      categoryName:''
    })
  }

  render() {
    return (
      <div>
        Add task
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputTextAdd}/>
        </form>
        Add category
        <form onSubmit={this.handleSubmitCategoryForm}>
          <input type="text" value={this.state.categoryName} onChange={this.handleInputCategoryAdd}/>
        </form>
        {/* {this.props.toDoData.categories.defaultCategory.map(todo => (
          <p key={todo.id}>{todo.text}</p>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {console.log(state)
  return {
    toDoData: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

// const AddTodo = ({ dispatch }) => {
//   let input
//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault()
//           if (!input.value.trim()) {
//             return
//           }
//           dispatch(addTodo(input.value))
//           input.value = ''
//         }}
//       >
//         <input ref={node => (input = node)} />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   )
// }

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)