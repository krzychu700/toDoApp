import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.scss";


class Item extends Component {

  handleCompleteTask = () => {
    this.props.actions.toggleTodo(this.props.id, this.props.category);
  };


  render() {
    return (
      <div className={this.props.completed ? "item_container item_container-completed" : "item_container" }>
        <p>{this.props.text}</p>
        <div className="item_iconContainer">
          <FontAwesomeIcon icon={faCheck} className="item_icon item_icon-done" onClick={this.handleCompleteTask}/>
          <FontAwesomeIcon icon={faTrashAlt} className="item_icon item_icon-trash"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDoData: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item)