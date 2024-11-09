import React from 'react';

 const TodoItem: React.FC<{taskText: string, key: string}> = (props) => {
    return(
        <li className="todos__task" key={props.key}>
            <label className="todos__task-label">
                <span className="todos__task-check"></span>
                <input className="todos__task-input" type="checkbox" />
                    <span className="todos__task-text">{props.taskText}</span>
            </label>
        </li>
    )
}

export default TodoItem;