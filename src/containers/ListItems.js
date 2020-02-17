import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Item } from "../components/Item";
import * as actions from "../actions/index";
import { bindActionCreators } from "redux";

import "./style.scss";

class ListItems extends Component {
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

  handleInputBlur = () => {
    if (!this.state.inputValue.trim()) {
      return
    } else {
      this.props.actions.addTodo(this.state.inputValue);
      this.setState({
        inputValue:''
      })
    }
  }

  render() {
    return (
      <>
        {this.props.toDoData.activeCategory !== "All tasks" &&
          <>
            <div className="newTask_container">
              Add new task
              <form onSubmit={this.handleSubmitForm}>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputTextAdd} onBlur={this.handleInputBlur}/>
              </form>
            </div>
            <div className="allTasks_container">
              {this.props.toDoData.categories[this.props.toDoData.activeCategory].length > 0 ? "" : "This category is empty"}
              {this.props.toDoData.categories[this.props.toDoData.activeCategory].map(element => (
                <Item key={element.id} text={element.text}/>
              ))}
            </div>
          </>
        }
        {this.props.toDoData.activeCategory === "All tasks" &&
          <>
            {Object.keys(this.props.toDoData.categories).map((category, index) => (
              <div key={index} className="Alltasks_container">
                <p className="list_category_text">{category}</p>
                  <div className="list_item">
                    {this.props.toDoData.categories[category].map(element => (
                      <Item key={element.id} text={element.text}/>
                    ))}
                  </div>
              </div>
              
            ))}
          </>
        }
      </>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)