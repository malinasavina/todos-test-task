import { useContext } from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import NoTodos from './NoTodos';
import classes from './Todos.module.css';

import { TodosContext } from '../store/todos-context';

export default function Todos() {
    const todosCtx = useContext(TodosContext);

    return (
        <div className={classes.todos}>
            <NewTodo />
            {todosCtx.items.length === 0 ? <NoTodos /> : <TodoList/>}
            {todosCtx.items.length > 0 && <TodoFooter />}
        </div>
    )
}