import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

const TodoList: React.FC<{items: Todo[], currentFilter: string, filters: {}, onTodoComplete: (id: string) => void}> = (props) => {
    const todoList = props.items
        .filter(props.filters[props.currentFilter as keyof typeof props.filters])
        .map(todo => {
            return (
                <TodoItem key={todo.id}
                          todoId={todo.id}
                          taskText={todo.text}
                          isCompleted={todo.isCompleted}
                          onTodoComplete={props.onTodoComplete}
                />
            )
        });

    return (
        <div className="todos__tasks">
            <ul className="todos__tasks-list">
                {todoList}
            </ul>
        </div>
    )
}

export default TodoList;