import React, { Component } from 'react';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
    };
  }

  handleInputChange = (e) => {
    console.log('EVENT: ',e)
    console.log('input changed');
    this.setState({textInput:e.target.value})
  };
  /*  showUser=()=>{
      this.props.
    }*/
  addNewItem=()=>{
    this.props.add(this.state.textInput)
  }
  render() {
    console.log('THIS: ', this);
    return (
      <div className="new-item">
        {/* <p>NEW ITEM</p> */}
        <input
          type="text"
          placeholder="write new task title"
          onChange={this.handleInputChange}
        />
        {/* TODO: after click add reset the input text value + dont forget the state
        so find a way to change both of them by change only one of them */}
        <button onClick={this.addNewItem}>Add</button>
      </div>
    );
  }
}
