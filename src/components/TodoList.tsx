import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

const TodoList: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoListFiltered = todosCtx.items.filter(todosCtx.filterMap[todosCtx.filter as keyof typeof todosCtx.filterMap]);

    const todoList = todoListFiltered
        .map(todo => {
            return (
                <TodoItem key={todo.id}
                          todoId={todo.id}
                          taskText={todo.text}
                          isCompleted={todo.isCompleted}
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