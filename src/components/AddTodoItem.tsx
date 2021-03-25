import { memo, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';
import { CircleButton, Input, InsertForm, InsertFormPositioner } from '../styles';

/**
 * Add new a todo item
 */
function AddTodoItem() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();

    const onToggle = () => setOpen(!open);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        });
        setValue('');
        setOpen(false);
    };

    return (
        <>
            {
                open && (
                    <InsertFormPositioner>
                        <InsertForm onSubmit={onSubmit}>
                            <Input
                                autoFocus
                                placeholder="Add your task and press enter"
                                onChange={onChange}
                                value={value}
                            />
                        </InsertForm>
                    </InsertFormPositioner>
                )
            }
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default memo(AddTodoItem);