import { Dispatch, ReactNode } from 'react';

export type Item = {
    id: number;
    text: string;
    done: boolean;
};

export type Action =
    | { type: 'CREATE'; text: string; }
    | { type: 'TOGGLE'; id: number; }
    | { type: 'REMOVE'; id: number; }
    | { type: 'EDIT'; id: number; text: string; };

export type ItemsState = Item[];
export type ItemDispatch = Dispatch<Action>;

export interface ChildrenProps {
    children: ReactNode;
}