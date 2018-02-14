import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {

    constructor(props)  {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Ciaone',
                    active: false,
                },
                {
                    id: 2,
                    text: 'Ciaone 2',
                    active: false,
                },
                {
                    id: 3,
                    text: 'Ciaone 3',
                    active: false,
                },
            ],
        }
    }

    handleTodoToggle = (todoToBeToggledId) => {

        let todos = this.state.todos.map(todo => {
            if (todo.id !== todoToBeToggledId) {
                return todo;
            }

            return {
                ...todo,
                active: !todo.active
            }
        });

        this.setState({
            todos: todos,
        });
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo =>
                    <Todo key={todo.id} todo={todo} onTodoToggle={this.handleTodoToggle} />
                )}
            </div>
        )
    }
}

export default TodoList;