export default function Task() {
    return(
        <li className="todos__task">
            <label className="todos__task-label">
                <span className="todos__task-check"></span>
                <input className="todos__task-input" type="checkbox" />
                    <span className="todos__task-text">Text</span>
            </label>
        </li>
    )
}