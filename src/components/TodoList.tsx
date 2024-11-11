import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

const TodoList: React.FC<{items: Todo[], currentFilter: string, filters: {}, onTodoComplete: (id: string) => void}> = (props) => {
    const todoListFiltered = props.items.filter(props.filters[props.currentFilter as keyof typeof props.filters]);

    const todoList = todoListFiltered
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
                {todoListFiltered.length === 0 ? <p className="todos__no-filtered">No available tasks</p> : todoList}
            </ul>
        </div>
    )
}

export default TodoList;