import React from 'react';

 const TodoItem: React.FC<{taskText: string, key: string, todoId: string, isCompleted: boolean, onTodoComplete: (id: string) => void}> = (props) => {
    let textClasses = 'todos__task-text';

    if (props.isCompleted) {
        textClasses += ' todos__task-text_checked';
    }

    return(
        <li className="todos__task" key={props.key}>
            <label className="todos__task-label">
                <span className="todos__task-check"></span>
                <input className="todos__task-input"
                       type="checkbox"
                       defaultChecked={props.isCompleted}
                       onChange={() => props.onTodoComplete(props.todoId)}
                />
                    <span className={textClasses}>{props.taskText}</span>
            </label>
        </li>
    )
}

export default TodoItem;