import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [], nextId: 1 }
  }

  onAdd = text => {
    const todoItem = {
      id: this.state.nextId,
      text,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, todoItem],
      nextId: this.state.nextId + 1
    })
  }

  render () {
    return (
      <div>
        <AddTodo onAdd={this.onAdd} />
        <TodoList todos={this.state.todos} toggleTodo={() => {}} />
        <Footer />
      </div>
    )
  }
}

export default App
