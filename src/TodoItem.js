import React, { Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
  render(){
    return (
      <div className="TodoItem">
      <div className="flatRoundedCheckbox">
      <input type="checkbox" className="flatRoundedCheckbox" id="flatOneRoundedCheckbox" checked={this.props.todo.status === 'completed'}
        onChange={this.toggle.bind(this)}/> 
        <label for="flatOneRoundedCheckbox"></label>
        <div></div>
        </div>
        <span className="title">{this.props.todo.title}</span>
      <button className="deleteInput" onClick={this.delete.bind(this)}>删除</button>
      </div>
    )
  }
  toggle(e){
    this.props.onToggle(e, this.props.todo)
  }
  delete(e){
    this.props.onDelete(e, this.props.todo)
  }
}

 
