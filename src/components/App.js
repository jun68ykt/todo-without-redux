import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'

class App extends React.Component {
  render () {
    return (
      <div>
        <AddTodo />
        {/* TODO: あとで todos と toggleTodo を修正 */}
        <TodoList todos={[]} toggleTodo={() => {}} />
        <Footer />
      </div>
    )
  }
}

export default App
