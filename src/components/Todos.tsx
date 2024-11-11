import { useState } from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import NoTodos from './NoTodos';

import Todo from '../models/todo';

const FILTER_MAP = {
    All: () => true,
    Active: (todo: any) => !todo.isCompleted,
    Completed: (todo: any) => todo.isCompleted
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState('All');

    const toggleTodoCompletedHandler = (id: string) => {
        const updatedTodos = todos.map(todo => {
            if (id === todo.id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    const clearCompletedHandler = () => {
        const remainingTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(remainingTodos);
    }

    const filterTodosHandler = (nextFilter: string) => {
        setFilter(nextFilter);
    }

    return (
        <div className="todos">
            <NewTodo onAddTodo={addTodoHandler} />
            {todos.length === 0 ? <NoTodos /> : (
                <TodoList items={todos}
                          filters={FILTER_MAP}
                          currentFilter={filter}
                          onTodoComplete={toggleTodoCompletedHandler}/>
            )}
            {todos.length > 0 && (
                <TodoFooter items={todos}
                            filters={FILTER_NAMES}
                            currentFilter={filter}
                            setCurrentFilter={filterTodosHandler}
                            onClearTodos={clearCompletedHandler}

                />
            )}
        </div>
    )
}