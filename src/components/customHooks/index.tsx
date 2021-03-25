import { useContext } from 'react';
import { TodoListState, Todo } from '../types';
import { TodoListStateContext, TodoDispatchContext } from '../TodoContext';

/**
 * The list should first show the pending todo items, once an item is marked as completed it should show it after the pending todo items.
 */
function sorting(tasks: TodoListState) {
    tasks.sort((a: Todo, b: Todo) => {
        if (a.done < b.done) return -1;
        else if (a.done > b.done) return 1;
        else return 0;
    });
}

export function useTodoState() {
    const context = useContext(TodoListStateContext);
    if (!context) {
        throw new Error('Cannot find TodoListStateContext.Provider');
    }
    sorting(context);
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoDispatchContext.Provider');
    }
    return context;
}