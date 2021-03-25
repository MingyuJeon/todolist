import { Dispatch, ReactNode } from 'react';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type Action =
    | { type: 'CREATE'; text: string; }
    | { type: 'TOGGLE'; id: number; }
    | { type: 'REMOVE'; id: number; }
    | { type: 'EDIT'; id: number; text: string; };

export type TodoListState = Todo[];
export type TodoDispatch = Dispatch<Action>;

export interface ChildrenProps {
    children: ReactNode;
}