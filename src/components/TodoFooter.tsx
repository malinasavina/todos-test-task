import React from 'react';

import FilterButton from './FilterButton';
import Todo from "../models/todo";

const TodoFooter: React.FC<{items: Todo[], filters: string[], currentFilter: string, setCurrentFilter: (currentFilter: string) => void, onClearTodos: () => void}> = (
    props
) => {
    const itemCount: number = props.items.filter(item => !item.isCompleted).length;
    const countNoun = itemCount !== 1 ? 'tasks' : 'task';
    const countText = `${itemCount} ${countNoun} left`;

    const filterList = props.filters.map(name => {
        return <FilterButton key={name}
                             name={name}
                             isPressed={name === props.currentFilter}
                             setCurrentFilter={props.setCurrentFilter}
        />
    });

    return(
        <footer className="todos__tasks-footer">
            <span className="todos__tasks-count">{countText}</span>
            <div className="todos__tasks-filter">
                {filterList}
            </div>
            <button className="todos__tasks-clear" onClick={props.onClearTodos}>Clear completed</button>
        </footer>
    )
}

export default TodoFooter;