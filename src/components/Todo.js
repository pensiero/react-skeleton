import React, { Component } from 'react';

class Todo extends Component {

    handleClick = () => {
        this.props.onTodoToggle(this.props.todo.id);
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                style={{
                    textDecoration: this.props.todo.active ? 'line-through' : 'none'
                }}
            >{this.props.todo.text}</div>
        )
    }
}

export default Todo;