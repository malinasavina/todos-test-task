import React from 'react';

import Button from './Button';

const Footer: React.FC<{itemsCount: number}> = (props) => {
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
            <button className="todos__tasks-clear">Clear completed</button>
        </footer>
    )
}

export default Footer;