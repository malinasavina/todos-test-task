import React, { useRef, useContext } from 'react';

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
        <form className="todos__form" onSubmit={submitHandler}>
            <span className="todos__input-icon"></span>
            <input className="todos__input" placeholder="What needs to be done?" type="text" ref={taskTextInputRef}/>
            <button className="todos__input-button" type="submit">OK</button>
        </form>
    )
}

export default NewTodo;