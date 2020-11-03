import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';
import NewItem from './components/NewItem';
import TodoList from './components/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: [],   
      organisationsks:[],
          user:[]
      
    };
  }

  AdminAddService = () => {
    axios
      .post('http://localhost:3000/AdminAddService')
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        console.log('DATA: ', "sucessful");
        this.setState({ service: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
  AdminAddOrganisation = () => {
    axios
      .get('http://localhost:3000/AdminAddOrganisation')
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        this.setState({ organisationsks: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
  AdminAddUser = () => {
    axios
      .post('http://localhost:3000/AdminAddUser')
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        this.setState({ user: response.data });
        
      })
      .catch((err) => {
        //console.log('ERR: ', err);
        console.log("error")
      });
  };
  /**
    <NewItem add={this.createNewItem}/>
        <TodoList tasksArr={this.state.tasks} a={this.state.age} />
         <p>APP</p>
        <button onClick={this.completeFirst}>complete first item</button>
        <button onClick={this.deleteFirst}>delete first item</button>
        <button onClick={this.changeAge}>change age to 80</button>
        <button onClick={this.changeToCoding}>change 1st to 'coding'</button>
        <p>AGE: {this.state.age}</p>
   */
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <div>
        <label>add user</label>
       <input type="text"></input>
       <button onClick={this.AdminAddUser}>add</button>
       </div> 
       <div>
        <label>first name</label>
       <input type="text"></input>
       <button>add</button>
       </div>
       <div>
        <label>midlle name</label>
       <input type="text"></input>
       <button>add</button>
       </div>
       <div>
        <label>last name</label>
       <input type="text"></input>
       <button>add</button>
       </div>
      </div>
      </BrowserRouter>
    );
  }
}
/* 
 // const a = 26;
    // console.log('A:', a);
    // console.log(7 + 8);
    // console.log('THIS: ', this);
    // const person={name:'ismail',age:26}
    // const {name,age}=person
    // const name = person.name
    // JSX   JS => { }
    // ` `      ${}
<button>a</button>
        <button>b</button> 

  <p>hello world</p>
        <p>5+8</p>
        <p>{5 + 8}</p>
        <p>my name is: {name} and my age is: {age} </p> 


react fragment
<>
</>




when you want to make a state in a class component
copy this code
constructor(props) {
    super(props);
    this.state = {

    };
  }
*/
