import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/todoList';
import TodoForm from './components/todoForm';

import './App.css';

const mapStateToProps = (state => {
  return state
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
