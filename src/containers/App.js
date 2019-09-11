import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../util'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      nextId: 1,
      filter: VisibilityFilters.SHOW_ALL
    }
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

  onToggle = id => {
    const todos = this.state.todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    this.setState({ todos })
  }

  onChangeFilter = filter => {
    this.setState({ filter })
  }

  visibleTodos = () => {
    const {todos, filter} = this.state
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

  render () {
    return (
      <div>
        <AddTodo onAdd={this.onAdd} />
        <TodoList todos={this.visibleTodos()} toggleTodo={this.onToggle} />
        <Footer
          selectedFilter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
      </div>
    )
  }
}

export default App
