import React, { useContext } from 'react';

import FilterButton from './FilterButton';
import { TodosContext } from '../store/todos-context';

const TodoFooter: React.FC= () => {
    const todosCtx = useContext(TodosContext);

    const itemCount: number = todosCtx.items.filter(item => !item.isCompleted).length;
    const countNoun = itemCount !== 1 ? 'tasks' : 'task';
    const countText = `${itemCount} ${countNoun} left`;

    const filterList = todosCtx.filterNames.map(name => {
        return <FilterButton key={name}
                             name={name}
                             isPressed={name === todosCtx.filter}
        />
    });

    return(
        <footer className="todos__tasks-footer">
            <span className="todos__tasks-count">{countText}</span>
            <div className="todos__tasks-filter">
                {filterList}
            </div>
            <button className="todos__tasks-clear" onClick={todosCtx.clearCompleted}>Clear completed</button>
        </footer>
    )
}

export default TodoFooter;