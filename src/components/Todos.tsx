import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import Todo from '../models/todo';

export default function Todos() {
    const todos = [
        new Todo('Test text 1'),
        new Todo('Test text 2')
    ];

    return (
        <div className="todos">
            <NewTodo />
            <TodoList items={todos} />
            <Footer />
        </div>
    )
}