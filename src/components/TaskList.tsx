import Task from './Task';

export default function TaskList() {
    return (
        <div className="todos__tasks">
            <ul className="todos__tasks-list">
                <Task />
            </ul>
        </div>
    )
}