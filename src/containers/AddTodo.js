import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleInputTextAdd = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value
    })
  };

  handleSubmitForm = (e) => {
    e.preventDefault()
    this.props.actions.addTodo(this.state.inputValue)
    console.log(this.props)
    this.setState({
      inputValue:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputTextAdd}/>
        </form>
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