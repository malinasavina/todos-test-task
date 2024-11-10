import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

const TodoList: React.FC<{items: Todo[], onTodoComplete: (id: string) => void}> = (props) => {
    return (
        <div className="todos__tasks">
            <ul className="todos__tasks-list">
                {props.items.map(item => <TodoItem key={item.id} todoId={item.id} taskText={item.text} isCompleted={item.isCompleted} onTodoComplete={props.onTodoComplete}/>)}
            </ul>
        </div>
    )
}

export default TodoList;