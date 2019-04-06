import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

function MainContent() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>);
    return (
        <main>
            <div className='todo-main-div'>
                <ul>
                    {todoItems}
                </ul>
            </div>
        </main>
    )
};
export default MainContent;