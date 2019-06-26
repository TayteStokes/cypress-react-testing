import React from 'react';

class App extends React.Component {
  // State
  state = {
    todos: ['workout', 'eat', 'code'],
    userInput: ''
  };

  // Methods
  removeTodo = index => {
    const {todos} = this.state;
    const updatedTodos = todos.filter((todo, i) => i !== index);
    this.setState({
      todos: updatedTodos
    })
  };

  addTodo = () => {
    const {userInput, todos} = this.state;
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
      <div>
        <h1>{todo}</h1>
        <button onClick={() => this.removeTodo(index)}>&#10003;</button>
      </div>
    ));


    return (
      <div>
        <h1>Another Todo List... Yay</h1>
        {mappedTodos}
        <div>
          <input type="text" onChange={this.handleInputChange} value={this.state.userInput}/>
          <button onClick={this.addTodo}>&#43;</button>
        </div>
      </div>
    )
  }
}

export default App;
