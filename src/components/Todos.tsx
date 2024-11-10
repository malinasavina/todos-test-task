import { useState } from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import NoTodos from './NoTodos';

import Todo from '../models/todo';

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const toggleTodoCompleted = (id: string) => {
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
        const remainingTodos = todos.filter(todo => todo.isCompleted === false);
        setTodos(remainingTodos);
    }

    return (
        <div className="todos">
            <NewTodo onAddTodo={addTodoHandler} />
            {todos.length === 0 ? <NoTodos /> : <TodoList items={todos} onTodoComplete={toggleTodoCompleted}/>}
            {todos.length === 0 ? undefined : <Footer itemsCount={todos.length} onClearTodos={clearCompletedHandler} />}
        </div>
    )
}