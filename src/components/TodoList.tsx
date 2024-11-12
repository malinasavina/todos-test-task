import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

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
        <ul className={classes.list}>
            {todoListFiltered.length === 0 ? <p className={classes.message}>No available tasks</p> : todoList}
        </ul>
    )
}

export default TodoList;