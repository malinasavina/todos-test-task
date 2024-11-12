import React, { useContext } from 'react';

import classes from './TodoItem.module.css';
import { TodosContext } from '../store/todos-context';

const TodoItem: React.FC<{taskText: string, key: string, todoId: string, isCompleted: boolean}> = (
     props
 ) => {
    const todosCtx = useContext(TodosContext);

    return(
        <li className={classes.todo} key={props.key}>
            <label className={classes.label}>
                <span className={classes.checkbox}></span>
                <input className={classes.input}
                       type="checkbox"
                       defaultChecked={props.isCompleted}
                       onChange={() => todosCtx.toggleTodoCompleted(props.todoId)}
                />
                    <span className={props.isCompleted ? `${classes.text} ${classes.checked}` : classes.text}>{props.taskText}</span>
            </label>
        </li>
    )
}

export default TodoItem;