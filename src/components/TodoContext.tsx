import { useReducer, createContext } from 'react';
import { Action, TodoListState, TodoDispatch, ChildrenProps } from './types';

function todoReducer(state: TodoListState, action: Action) {
    let _id = Math.max(0, ...state.map(todo => todo.id));
    const nextId = _id + 1;
    switch (action.type) {
        case 'CREATE':
            return state.concat({
                id: nextId,
                text: action.text,
                done: false
            });
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'EDIT':
            return state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo)
        default:
            throw new Error(`Unhandled action type`);
    }
}

export const TodoListStateContext = createContext<TodoListState | undefined>(undefined);
export const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

export function TodoContextProvider({ children }: ChildrenProps) {
    const [state, dispatch] = useReducer(todoReducer, []);
    return (
        <TodoListStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoListStateContext.Provider>
    );
}