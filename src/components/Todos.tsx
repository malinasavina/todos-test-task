import Input from './Input';
import TaskList from './TaskList';
import Footer from './Footer';

export default function Todos() {
    return (
        <div className="todos">
            <Input />
            <TaskList />
            <Footer />
        </div>
    )
}