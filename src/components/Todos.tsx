import Input from './Input';
import TaskList from './TaskList';
import Footer from './Footer';
import Todo from '../models/todo';
import todo from "../models/todo";

export default function Todos() {
    const todos = [
        new Todo('Test text 1'),
        new Todo('Test text 2')
    ];

    return (
        <div className="todos">
            <Input />
            <TaskList items={todos} />
            <Footer />
        </div>
    )
}