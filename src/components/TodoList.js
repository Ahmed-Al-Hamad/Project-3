import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    console.log('THIS: ', this);

    const tasks3 = this.props.tasksArr.map((elem, i) => (
      <TodoItem oneTask={elem} key={i} num={i+1} />
    ));

    return (
      <div className="todo-list">
        <p>TODO LIST</p>
        {/* <p>{this.props.a}</p> */}
        {tasks3}
      </div>
    );
  }
}

/* 
const names = ['moh', 'amr', 'ali'];
    const nums = [2, 5, 7];
    const nums2 = nums.map((elem) => elem * 2);
    const namesParg = names.map((elem) => <p>{elem}</p>);
    console.log('NUMS2: ', nums2);
    const tasks2 = tasks.map((elem) => <p>{elem.title}</p>);







  {names}
        {nums2}
        {namesParg}
        ================================
        {tasks2}
*/
