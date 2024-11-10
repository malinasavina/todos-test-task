import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

const TodoList: React.FC<{items: Todo[]}> = (props) => {
    return (
        <div className="todos__tasks">
            <ul className="todos__tasks-list">
                {props.items.map(item => <TodoItem index={item.id} taskText={item.text} />)}
            </ul>
        </div>
    )
}

export default TodoList;