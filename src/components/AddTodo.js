import React from 'react'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todoText: '' }
  }

  onInputChange = e => {
    this.setState({ todoText: e.target.value })
  }

  onSubmit = () => {
    const text = this.state.todoText.trim()
    if (!text) return
    this.props.onAdd(text)
    this.setState({ todoText: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange}
          value={this.state.todoText}
        />
        <button
          type="button"
          onClick={this.onSubmit}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo
