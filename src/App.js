import React from 'react';
import 'reset-css';
import './App.css';

class App extends React.Component {
  // State
  state = {
    todos: ['workout', 'eat', 'code'],
    userInput: ''
  };

  // Methods
  removeTodo = index => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo, i) => i !== index);
    this.setState({
      todos: updatedTodos
    })
  };

  addTodo = () => {
    const { userInput, todos } = this.state;
    const updatedTodos = [...todos, userInput];
    this.setState({
      todos: updatedTodos,
      userInput: ''
    })
  };

  handleInputChange = event => {
    this.setState({
      userInput: event.target.value
    })
  };

  render() {
    // map through the todos list
    const mappedTodos = this.state.todos.map((todo, index) => (
      <div className="todo-container">
        <h1>{todo}</h1>
        <button onClick={() => this.removeTodo(index)}>done</button>
      </div>
    ));


    return (
      <div className="app-container">
        <div className="todo-list-container">
          {mappedTodos}
        </div>
        <div className="new-todo-container">
          <input type="text" onChange={this.handleInputChange} value={this.state.userInput} className="todo-input"/>
          <button onClick={this.addTodo}>add</button>
        </div>
      </div>
    )
  }
}

export default App;
