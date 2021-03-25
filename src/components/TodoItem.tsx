import { memo, useState } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { CheckCircle, Remove, TodoItemBlock, Text, Input, InsertForm } from '../styles';
import { useTodoDispatch } from './TodoContext';
import { Item } from './types';

function TodoItem({ id, done, text }: Item) {
    const [editToggle, onToggleEdit] = useState(false);
    const [value, setValue] = useState(text);
    const dispatch = useTodoDispatch();
    const onToggleDone = () => dispatch({ type: 'TOGGLE', id }); // Mark a todo item as done or Strike through of completed item
    const onRemove = () => dispatch({ type: 'REMOVE', id }); // Delete a todo item
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'EDIT',
            text: value,
            id
        });
        setValue('');
        onToggleEdit(!editToggle);
    };
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggleDone}>{done && <MdDone />}</CheckCircle>
            {
                !editToggle ? <Text done={done} onClick={() => onToggleEdit(!editToggle)}>{text}</Text> :
                    <form onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            onChange={onChange}
                            value={value}
                        />
                    </form>
            }
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default memo(TodoItem);
