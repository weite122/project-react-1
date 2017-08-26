import React, { Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomString:  randomString(16)
    }
  }
  render(){
    return (
      <div className="TodoItem">
      <div className="flatRoundedCheckbox">
      <input type="checkbox" id={this.state.randomString} checked={this.props.todo.status === 'completed'}
        onChange={this.toggle.bind(this)}/> 
        <label htmlFor={this.state.randomString}></label>
        <div></div>
        </div>
        <span className="title">{this.props.todo.title}</span>
      <button className="deleteInput" onClick={this.delete.bind(this)}>×</button>
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

function randomString(len) {
  　　len = len || 16;
  　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  　　var maxPos = $chars.length;
  　　var pwd = '';
  　　for (var i = 0; i < len; i++) {
  　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  　　}
  　　return pwd;
}

 
