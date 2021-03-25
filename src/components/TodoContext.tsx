import { useReducer, createContext, useContext } from 'react';
import { Item, Action, ItemsState, ItemDispatch, ChildrenProps } from './types';

const initialTodos: ItemsState = [];
const ItemStateContext = createContext<ItemsState | undefined>(undefined);
const ItemDispatchContext = createContext<ItemDispatch | undefined>(undefined);

function todoReducer(state: ItemsState, action: Action) {
    let _id = Math.max(...state.map(todo => todo.id));
    const nextId = _id < 0 ? 0 : _id + 1;
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
        default:
            throw new Error(`Unhandled action type`);
    }
}

/**
 * The list should first show the pending todo items, once an item is marked as completed it should show it after the pending todo items.
 */
function sorting(tasks: ItemsState) {
    tasks.sort((a: Item, b: Item) => {
        if (a.done < b.done) return -1;
        else if (a.done > b.done) return 1;
        else return 0;
    });
}

export function TodoProvider({ children }: ChildrenProps) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <ItemStateContext.Provider value={state}>
            <ItemDispatchContext.Provider value={dispatch}>
                {children}
            </ItemDispatchContext.Provider>
        </ItemStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('Cannot find ItemProvider');
    }
    sorting(context);
    return context;
}

export function useTodoDispatch() {
    const context = useContext(ItemDispatchContext);
    if (!context) {
        throw new Error('Cannot find ItemProvider');
    }
    return context;
}