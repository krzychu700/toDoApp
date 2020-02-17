import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { Item } from "../components/Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      categoryName: '',
      activeCategoryInput: false
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
      this.setState({
        activeCategoryInput: false
      })
    }
    this.props.actions.addCategory(this.state.categoryName);
    this.setState({
      categoryName:'',
      activeCategoryInput: false
    })
  }

  handleCategoryActiveChange = (e) => {
    this.props.actions.activeCategory(e.target.id)
  }

  handleInputBlur = () => {
    if (!this.state.categoryName.trim()) {
      this.setState({
        activeCategoryInput: false
      })
    } else {
      this.props.actions.addCategory(this.state.categoryName);
      this.setState({
        categoryName:'',
        activeCategoryInput: false
      })
    }
  }

  handleOpenCategoryInput = () => {
    this.setState({
      activeCategoryInput: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="tasks_container">
          <div className="newTask_container">
            Add new task
            <form onSubmit={this.handleSubmitForm}>
              <input type="text" value={this.state.inputValue} onChange={this.handleInputTextAdd}/>
            </form>
          </div>
          <div className="allTasks_container">
            {this.props.toDoData.categories[this.props.toDoData.activeCategory].length > 0 ? "" : "This category is empty"}
            {this.props.toDoData.categories[this.props.toDoData.activeCategory].map(element => (
              <Item key={element.id} text={element.text}/>
            ))}
          </div>
        </div>
        <div className="sidebar">
          <p className="sidebar_text">categories</p>
          {Object.keys(this.props.toDoData.categories).map((category, index) => (
            <div
              key={index}
              className={this.props.toDoData.activeCategory === category ? "category_container category_container-active" : "category_container"}
              onClick={this.handleCategoryActiveChange}
              id={category}>

              <FontAwesomeIcon icon={faFolder} className="category_icon"/>
              <p className="category_text">{category}</p>
            </div>
          ))}
          {this.state.activeCategoryInput === false &&
            <div onClick={this.handleOpenCategoryInput} className="add_categoryButton">
              <FontAwesomeIcon icon={faPlus} className="category_icon"/>
              <p className="category_text">Add category</p>
            </div>
          }
          {this.state.activeCategoryInput === true &&
            <form onSubmit={this.handleSubmitCategoryForm} className="category_form">
              <input
                type="text"
                autoFocus
                maxLength={20}
                placeholder="Start typing..."
                value={this.state.categoryName}
                onChange={this.handleInputCategoryAdd}
                onBlur={this.handleInputBlur}/>
            </form>
          }
        </div>
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