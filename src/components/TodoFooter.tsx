import React, { useContext } from 'react';

import FilterButton from './FilterButton';
import classes from './TodoFooter.module.css';
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
        <footer className={classes.footer}>
            <span className={classes.counter}>{countText}</span>
            <div className={classes.filters}>
                {filterList}
            </div>
            <button className={classes.button} onClick={todosCtx.clearCompleted}>Clear completed</button>
        </footer>
    )
}

export default TodoFooter;