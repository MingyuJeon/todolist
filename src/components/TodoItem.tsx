import { memo } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { CheckCircle, Remove, TodoItemBlock, Text } from '../styles';
import { useTodoDispatch } from './TodoContext';
import { Item } from './types';

function TodoItem({ id, done, text }: Item) {
    const dispatch = useTodoDispatch();
    const onToggleDone = () => dispatch({ type: 'TOGGLE', id }); // Mark a todo item as done or Strike through of completed items
    const onRemove = () => dispatch({ type: 'REMOVE', id }); // Delete a todo item
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggleDone}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default memo(TodoItem);
