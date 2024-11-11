import React, { useContext } from 'react';

import { TodosContext } from '../store/todos-context';

const TodoItem: React.FC<{taskText: string, key: string, todoId: string, isCompleted: boolean}> = (
     props
 ) => {
    const todosCtx = useContext(TodosContext);

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
                       onChange={() => todosCtx.toggleTodoCompleted(props.todoId)}
                />
                    <span className={textClasses}>{props.taskText}</span>
            </label>
        </li>
    )
}

export default TodoItem;