import React, {useState} from 'react';

import Todo from '../models/todo';

type TodosContextObject = {
    items: Todo[];
    filter: string;
    filterMap: {};
    filterNames: string[];
    toggleTodoCompleted: (id: string) => void;
    addTodo: (text: string) => void;
    clearCompleted: () => void;
    filterTodos: (filter: string) => void;
}

const FILTER_MAP = {
    All: () => true,
    Active: (todo: any) => !todo.isCompleted,
    Completed: (todo: any) => todo.isCompleted
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    filter: '',
    filterMap: {},
    filterNames: [],
    toggleTodoCompleted: (id: string) => {},
    addTodo: (text: string) => {},
    clearCompleted: () => {},
    filterTodos: (filter: string) => {}
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState('All');

    const toggleTodoCompletedHandler = (id: string) => {
        const updatedTodos = todos.map(todo => {
            if (id === todo.id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const clearCompletedHandler = () => {
        const remainingTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(remainingTodos);
    };

    const filterTodosHandler = (nextFilter: string) => {
        setFilter(nextFilter);
    };

    const contextValue: TodosContextObject = {
        items: todos,
        filter: filter,
        filterMap: FILTER_MAP,
        filterNames: FILTER_NAMES,
        toggleTodoCompleted: toggleTodoCompletedHandler,
        addTodo: addTodoHandler,
        clearCompleted: clearCompletedHandler,
        filterTodos: filterTodosHandler
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};

export default TodosContextProvider;
