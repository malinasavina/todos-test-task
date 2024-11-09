import React from 'react';

import Task from './Task';
import Todo from '../models/todo';

const TaskList: React.FC<{items: Todo[]}> = (props) => {
    return (
        <div className="todos__tasks">
            <ul className="todos__tasks-list">
                {props.items.map(item => {
                    return <Task key={item.id} taskText={item.text} />
                })}
            </ul>
        </div>
    )
}

export default TaskList;