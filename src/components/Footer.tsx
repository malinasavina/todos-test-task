import React from 'react';

import Button from './Button';
import Todo from "../models/todo";

const Footer: React.FC<{items: Todo[], onClearTodos: () => void}> = (props) => {
    const itemCount: number = props.items.filter(item => item.isCompleted === false).length;
    const countNoun = itemCount !== 1 ? 'tasks' : 'task';
    const countText = `${itemCount} ${countNoun} left`;

    return(
        <footer className="todos__tasks-footer">
            <span className="todos__tasks-count">{countText}</span>
            <div className="todos__tasks-filter">
                <Button />
                <Button />
                <Button />
            </div>
            <button className="todos__tasks-clear" onClick={props.onClearTodos}>Clear completed</button>
        </footer>
    )
}

export default Footer;