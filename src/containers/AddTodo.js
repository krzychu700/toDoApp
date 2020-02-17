import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import ListItems from "./ListItems";
import "./style.scss";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      activeCategoryInput: false
    }
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
          <ListItems />
        </div>
        <div className="sidebar">
          <div
            className={this.props.toDoData.activeCategory === "All tasks" ? "category_container category_container-active" : "category_container"}
            onClick={this.handleCategoryActiveChange}
            id={"All tasks"}>
            <FontAwesomeIcon icon={faFolder} className="category_icon"/>
            <p className="category_text">All tasks</p>
          </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)