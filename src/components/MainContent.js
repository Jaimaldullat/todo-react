import React from 'react';
import TodoItem from './TodoItem';

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.uuidv4 = this.uuidv4.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(id) {
        this.setState((previousState) => {
            const updatedTodos = previousState.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            });
            return {
                todos: updatedTodos
            }
        })
    }

    onAddItem() {
        if (this.state.value) {
            this.setState(preState => {
                const todos = [
                    {
                        value: preState.value,
                        id: this.uuidv4(),
                        completed: false
                    }, ...preState.todos
                ];
                return {
                    todos,
                    value: ''
                }
            })
        }
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleKeyPress(e) {
        if (e.key == 'Enter') {
            this.onAddItem();
        }
    }

    uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

    render() {
        const todoItems = this.state.todos.length > 0 ?
            this.state.todos.map(item =>
                <TodoItem key={item.id} handleChange={this.handleChange} item={item}/>) :
            <li style={{border: 'none'}}>No item added</li>;
        return (
            <main>
                <div className='todo-main-div'>
                    <ul>
                        <label>
                            <input
                                name='name'
                                value={this.state.value}
                                onChange={this.onChangeValue}
                                onKeyPress={this.handleKeyPress}
                                autoComplete='off'
                                type='text'/>
                            <button onClick={this.onAddItem}>Add</button>
                        </label>
                        {todoItems}
                    </ul>
                </div>
            </main>
        )
    }
}
;
export default MainContent;