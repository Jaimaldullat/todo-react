import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li className={this.props.item.completed ? 'completed': null} style={{display: !this.props.item.value && 'none'}}>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => this.props.handleChange(this.props.item.id)}
                        checked={this.props.item.completed}
                    />
                    {this.props.item.value}
                </label>
            </li>
        )
    }
};
export default TodoItem;