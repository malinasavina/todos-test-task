import React from 'react';

const FilterButton: React.FC<{key: string, name: string, isPressed: boolean, setCurrentFilter: (currentFilter: string) => void}> = (props) => {
    let buttonClasses = 'todos__tasks-button';

    if (props.isPressed) {
        buttonClasses += ' todos__tasks-button_active'
    }

    return (
        <button className={buttonClasses}
                key={props.key}
                aria-pressed={props.isPressed}
                onClick={() => props.setCurrentFilter(props.name)}
        >
            {props.name}
        </button>
    )
}

export default FilterButton;