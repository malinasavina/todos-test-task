import { useState } from 'react';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import NoTodos from './NoTodos';

import Todo from '../models/todo';

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    return (
        <div className="todos">
            <NewTodo onAddTodo={addTodoHandler} />
            {todos.length === 0 ? <NoTodos /> : <TodoList items={todos} />}
            <Footer itemsCount={todos.length} />
        </div>
    )
}