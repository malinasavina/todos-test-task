import React, { useContext } from 'react';

import classes from './FilterButton.module.css';
import { TodosContext } from '../store/todos-context';

const FilterButton: React.FC<{key: string, name: string, isPressed: boolean}> = (
    props
) => {
    const todosCtx = useContext(TodosContext);

    return (
        <button className={props.isPressed ? `${classes.button} ${classes.active}` : classes.button}
                key={props.key}
                aria-pressed={props.isPressed}
                onClick={() => todosCtx.filterTodos(props.name)}
        >
            {props.name}
        </button>
    )
}

export default FilterButton;