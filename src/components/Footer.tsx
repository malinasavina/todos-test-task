import Button from './Button';

export default function Footer() {
    return(
        <footer className="todos__tasks-footer">
            <span className="todos__tasks-count">2 items left</span>
            <div className="todos__tasks-filter">
                <Button />
                <Button />
                <Button />
            </div>
            <button className="todos__tasks-clear">Clear completed</button>
        </footer>
    )
}