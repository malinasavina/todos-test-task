import React, { useRef, useContext } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const taskTextInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        let enteredText = taskTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
        taskTextInputRef.current!.value = '';
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <span className={classes.icon}></span>
            <input className={classes.input} placeholder="What needs to be done?" type="text" ref={taskTextInputRef}/>
            <button className={classes.button} type="submit">OK</button>
        </form>
    )
}

export default NewTodo;