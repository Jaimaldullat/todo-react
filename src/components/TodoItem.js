import React from 'react';

function TodoItem(props) {
    return (
        <li style={{display: !props.item.text && 'none'}}>
            <label>
                <input type="checkbox" checked={props.item.completed}/>
                {props.item.text}
            </label>
        </li>
    )
};
export default TodoItem;