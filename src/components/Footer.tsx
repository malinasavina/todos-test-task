import React from 'react';

import Button from './Button';
import Todo from "../models/todo";

const Footer: React.FC<{itemsCount: number, onClearTodos: () => void}> = (props) => {
    const countNoun = props.itemsCount !== 1 ? 'tasks' : 'task';
    const countText = `${props.itemsCount} ${countNoun} left`;


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