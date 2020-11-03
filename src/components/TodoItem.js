import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    // console.log('THIS: ',this)
    const { oneTask, num } = this.props;
    const { title, isCompleted } = oneTask;
    return (
      <div className="todo-item">
        {/* <p>todo item</p> */}
        {/* condition ? ifTrue : ifFalse */}

        <span>
          {num}. {title}{' '}
        </span>
        <span>{isCompleted ? '[COMPLETED]' : '[NOT COMPLETED]'}</span>
        <button>X</button>
        {/* TODO: delete specific task */}
        
        {/* TODO: mark specific task isCompleceted true or false 

        using checkbox

        also add new class to the css and use it:
          if isCompleceted is true => use line through
          if isCompleceted is false => use none
        */}
      </div>
    );
  }
}
