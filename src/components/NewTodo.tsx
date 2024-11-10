import React, { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const taskTextInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        let enteredText = taskTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
        taskTextInputRef.current!.value = '';
    }

    return (
        <form className="todos__form" onSubmit={submitHandler}>
            <span className="todos__input-icon"></span>
            <input className="todos__input" placeholder="What needs to be done?" type="text" ref={taskTextInputRef}/>
            <button className="todos__input-button">OK</button>
        </form>
    )
}

export default NewTodo;