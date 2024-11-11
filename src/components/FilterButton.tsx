import React, { useContext } from 'react';

import { TodosContext } from '../store/todos-context';

const FilterButton: React.FC<{key: string, name: string, isPressed: boolean}> = (
    props
) => {
    const todosCtx = useContext(TodosContext);

    let buttonClasses = 'todos__tasks-button';

    if (props.isPressed) {
        buttonClasses += ' todos__tasks-button_active'
    }

    return (
        <button className={buttonClasses}
                key={props.key}
                aria-pressed={props.isPressed}
                onClick={() => todosCtx.filterTodos(props.name)}
        >
            {props.name}
        </button>
    )
}

export default FilterButton;